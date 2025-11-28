export const contractAddress = "0x0438ee0137585db8426F50332DF12c41E3fE24fb";

// Export only the ABI array expected by viem/wagmi
export const contractABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_participantName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_competitionName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_score",
        "type": "uint256"
      }
    ],
    "name": "addEntry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "entries",
    "outputs": [
      {
        "internalType": "string",
        "name": "participantName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "competitionName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "score",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getEntry",
    "outputs": [
      {
        "internalType": "string",
        "name": "participant",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "competition",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "score",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEntryCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;