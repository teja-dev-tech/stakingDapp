
# **Staking DApp**  
A decentralized application (DApp) for staking tokens on the Ethereum blockchain. This application allows users to stake ERC-20 tokens and interact with smart contracts seamlessly through a modern, responsive interface.

---

## **Features**  
- **Token Staking:** Stake and manage ERC-20 tokens with ease.  
- **Smart Contracts:** Powered by robust, secure Solidity smart contracts deployed on Ethereum.  
- **Real-Time Notifications:** Integrated with `react-toastify` for user-friendly feedback and alerts.  
- **Responsive Design:** Built with TailwindCSS for a sleek, modern UI.  
- **Fast Development:** Developed using Vite for blazing-fast builds and live reloading.  

---

## **Getting Started**  

Follow these steps to set up and run the project locally:  

### **1. Clone the Repository**  
```bash  
git clone https://github.com/teja-dev-tech/stakingDapp.git  
cd staking-dapp  
```  

### **2. Install Dependencies**  
Ensure you have Node.js and npm installed. Then run:  
```bash  
npm install  
```  

### **3. Start the Development Server**  
Run the following command to start the application:  
```bash  
npm run dev  
```  
This will launch the DApp at `http://localhost:5173`.  

---

## **Technologies Used**  

| **Technology**    | **Description**                                                                 |
|--------------------|---------------------------------------------------------------------------------|
| **web3.js**        | JavaScript library for interacting with Ethereum blockchain nodes and smart contracts. |
| **Vite**           | Build tool and development server for faster project development.              |
| **React**          | Frontend library for building reusable UI components.                         |
| **react-toastify** | Library for displaying toast notifications in React applications.             |
| **TailwindCSS**    | Utility-first CSS framework for custom designs.                               |
| **Solidity**       | Programming language for Ethereum smart contracts.                            |
| **Ethereum**       | Decentralized platform for deploying and running smart contracts.             |  

---

## **Deployed Contracts**  

- **Stake Token Contract Address:** `0xE7383b20B73905195E1c71992F1586e8a432dab5`  
- **Staking Contract Address:** `0xb1a7Ab0890CcC0d4B4A4298DeE8766F45b0Bf0d7`  

These smart contracts are deployed on the Ethereum **Sepolia testnet**, ensuring realistic testing with minimal gas fees.  

---

## **Using Remix for Smart Contracts**  
1. Visit [Remix Ethereum IDE](https://remix.ethereum.org/) for compiling and deploying Solidity smart contracts.  
2. Compile the smart contract code using the **Solidity Compiler** in Remix.  
3. Connect Remix to the Sepolia testnet using MetaMask for deployment.  
4. Deploy the contract, and ensure the gas fees are covered using Sepolia testnet ETH.  

---
## **Project images**
Below are the key pages of the Staking DApp for reference:

1. Landing Page : 
The entry point showcasing the DApp’s features and allowing users to connect their wallets.

![landingpage](https://github.com/user-attachments/assets/ed2d371b-1aa7-45ee-8cf5-38cbf488a549)

2. Wallet Connected : 
Displays the interface once the user's wallet is successfully connected.

![walletconnected](https://github.com/user-attachments/assets/e5c8fd36-56ea-41f2-a2ad-780bc183246f)

3. Stake Tokens : 
The section where users can stake their tokens.

![stake](https://github.com/user-attachments/assets/32882056-df92-450b-9fd8-c23a87de8197)

4. Withdraw Tokens : 
The section for withdrawing staked tokens.

![withdraw stake](https://github.com/user-attachments/assets/d0da0c83-49fc-49c7-bd00-2c923278d397)


5. Rewards Claimed : 
Shows confirmation and details when rewards are successfully claimed.

![rewardsclaimed](https://github.com/user-attachments/assets/504feeac-fb37-4059-a390-e29f7e480ab6)

6. Claim free tokens:
   
   ![image](https://github.com/user-attachments/assets/3bbd1aba-5d5a-4504-b20f-bd6fb538d4f5)


---

## **License**  

This project is licensed under the MIT License.

---

### **Contributions**  
Contributions are welcome! To contribute:  
1. Fork the repository.  
2. Create a new branch for your feature (`git checkout -b feature-name`).  
3. Commit your changes (`git commit -m "Add feature"`).  
4. Push the branch to your fork (`git push origin feature-name`).  
5. Submit a pull request.  

