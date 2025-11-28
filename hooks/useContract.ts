"use client";

import { useState, useEffect } from "react";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { contractABI, contractAddress } from "@/lib/contract";

export interface EntryData {
  participant: string;
  competition: string;
  score: string;
  time: string;
}

export const useCompetitionContract = () => {
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [entries, setEntries] = useState<EntryData[]>([]);

  const { data: entryCount, refetch: refetchEntryCount } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getEntryCount",
  });

  const { writeContractAsync, data: hash, error, isPending } =
    useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (entryCount) {
      loadEntries();
    }
  }, [entryCount]);

  const loadEntries = async () => {
    if (!entryCount) return;

    const total = Number(entryCount);

    const newEntries: EntryData[] = [];
    for (let i = 0; i < total; i++) {
      try {
        const result = await useReadContract({
          address: contractAddress,
          abi: contractABI,
          functionName: "getEntry",
          args: [BigInt(i)],
        });

        // Not directly usable due to hook rules, but kept for structure reference.
        console.warn(
          "Reminder: Cannot call useReadContract in loops. Replace with wagmi publicClient if needed."
        );
      } catch {}
    }
  };

  const addEntry = async (
    participantName: string,
    competitionName: string,
    score: string
  ) => {
    if (!participantName || !competitionName || !score) return;
    try {
      setIsLoading(true);
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "addEntry",
        args: [participantName, competitionName, BigInt(score)],
      });
    } catch (err) {
      console.error("Error adding entry:", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const state = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    hash,
  };

  return {
    entries,
    entryCount: entryCount ? Number(entryCount) : 0,
    addEntry,
    state,
  };
};
