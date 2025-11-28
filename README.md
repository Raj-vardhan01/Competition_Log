# 🏆 Competition Log – Smart Contract & Frontend Integration

## **Contract Address**
**0x0438ee0137585db8426F50332DF12c41E3fE24fb**  
Flare Coston2 Explorer:  
https://coston2-explorer.flare.network/address/0x0438ee0137585db8426F50332DF12c41E3fE24fb

---

## 📌 **Project Description**

Competition Log is a decentralized application (dApp) designed to store and view competition results on the blockchain.  
It allows users to submit entries with:

- Participant name  
- Competition name  
- Score  
- Timestamp (auto-generated on-chain)

All entries are stored publicly and immutably on the Flare network.

---

## ⭐ **Features**

### **Smart Contract**
- Add competition entries on-chain
- Fetch individual entry details
- Get total number of entries
- Immutable record storage for transparency

### **Frontend (Next.js + Wagmi + Viem)**
- Wallet-based access
- Add competition entries using contract calls
- Live status updates:
  - Pending
  - Confirming
  - Confirmed
  - Error handling
- Fully typed hooks for contract interactions

### **Infrastructure**
- Works on Flare Coston2 testnet
- Uses Wagmi v2 + Viem contract interactions

---

## 🎯 **How It Solves the Problem**

### **Problem**
Tracking competition results often requires centralized databases that can be modified or lost.  
Organizers and participants need:

- A tamper-proof scoreboard  
- Transparent result history  
- A globally accessible record system  
- Trustless validation of scores

### **Solution**
Competition Log stores all entries directly on the blockchain, ensuring:

- **Immutability:** results cannot be altered  
- **Transparency:** anyone can view entries  
- **Decentralization:** no central authority required  
- **Timestamp authenticity:** blockchain records prevent forgery  
- **Security:** protected by Flare Network consensus  

### **Use Cases**
- Gaming tournaments  
- Coding competitions  
- Sports event logging  
- Leaderboards for decentralized apps  
- Public verifiable proof-of-score systems  

---

## 🚀 **Summary**

Competition Log is a secure, trustless, and transparent way to track competition results using the power of blockchain.  
With a clean frontend and simple smart contract, it provides an easy-to-use solution for storing and verifying scores on-chain.



