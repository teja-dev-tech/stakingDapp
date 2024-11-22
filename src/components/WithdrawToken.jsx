import React, { useState } from 'react';
import { useWallet } from '../context/walletcontext';
import { toast } from 'react-toastify';

const WithdrawToken = () => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const { withdraw } = useWallet();

  const handleWithdraw = async () => {
    try{
    await withdraw(withdrawAmount);
    console.log(`Withdrawing ${withdrawAmount} tokens`);
    setWithdrawAmount('');
    toast.success('Withdrawn successfully');
    }
    catch(error){
      toast.error('Failed to withdraw');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto mt-4">
      <div className=" p-3 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Withdraw Your Tokens</h2>
        <label htmlFor="withdrawAmount" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Withdraw Amount
        </label>
        <input
          type="number"
          id="withdrawAmount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 mb-4"
          placeholder="Enter amount"
        />
        <button
          onClick={handleWithdraw}
          className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default WithdrawToken;