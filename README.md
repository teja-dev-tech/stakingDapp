
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

