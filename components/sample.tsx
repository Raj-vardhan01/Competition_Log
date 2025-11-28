"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { useCompetitionContract } from "@/hooks/useContract";

const SampleIntegration = () => {
  const { isConnected } = useAccount();

  const [participantName, setParticipantName] = useState("");
  const [competitionName, setCompetitionName] = useState("");
  const [score, setScore] = useState("");

  const { addEntry, entryCount, state } = useCompetitionContract();

  const handleAddEntry = async () => {
    if (!participantName || !competitionName || !score) return;
    try {
      await addEntry(participantName, competitionName, score);
      setParticipantName("");
      setCompetitionName("");
      setScore("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold">Competition Log</h2>
          <p>Please connect your wallet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Competition Log</h1>

        <p className="text-lg mb-6">Total Entries: {entryCount}</p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Participant Name"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
            className="w-full px-4 py-2 bg-card border border-border rounded-lg"
          />

          <input
            type="text"
            placeholder="Competition Name"
            value={competitionName}
            onChange={(e) => setCompetitionName(e.target.value)}
            className="w-full px-4 py-2 bg-card border border-border rounded-lg"
          />

          <input
            type="number"
            placeholder="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="w-full px-4 py-2 bg-card border border-border rounded-lg"
          />

          <button
            onClick={handleAddEntry}
            disabled={state.isLoading}
            className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            {state.isLoading ? "Submitting..." : "Add Entry"}
          </button>
        </div>

        {state.hash && (
          <div className="mt-6 p-4 border rounded-lg">
            <p className="font-mono text-sm break-all">{state.hash}</p>
          </div>
        )}

        {state.error && (
          <div className="mt-6 p-4 border border-destructive rounded-lg">
            <p className="text-destructive">{state.error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SampleIntegration;
