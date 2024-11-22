import React from 'react';
import { useWallet } from '../context/walletcontext';

const ConnectWallet = () => {
  const { connectWallet, selectedAccount, chainId, disconnectWallet } = useWallet();
  const formatAccount = (account) => {
    if (!account) return '';
    return `${account.slice(0, 3)}...${account.slice(-2)}`;
  };
  return (
    <div className="flex flex-col items-center justify-center my-2 md:my-0  h-auto  bg-gray-100">
      {!selectedAccount && (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
        >
          Connect Wallet
        </button>
      )}
      <div className='flex justify-center items-center gap-2'>
      {selectedAccount && (
        <button
          onClick={disconnectWallet}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Disconnect Wallet
        </button>
      )}
      {selectedAccount && (
        <div className=" p-2 bg-white rounded-lg shadow-md">
          <div className="text-lg font-semibold"> Account: {formatAccount(selectedAccount)}</div>
        </div>
      )}
      </div>
    
    </div>
  );
};

export default ConnectWallet;