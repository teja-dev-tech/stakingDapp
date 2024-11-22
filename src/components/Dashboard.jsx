import React from 'react';
import { useWallet } from '../context/walletcontext';
import { toast } from 'react-toastify'

const Dashboard = () => {
  const { selectedAccount, tokenBalance, stakeAmount, earnedRewards, lastStakedTime, claim, receiveFreeTokens } = useWallet();
  const claimRewards = async () => {
    try {
      await claim();
      toast.success('Rewards claimed successfully');
    }
    catch (error) {
      toast.error('Failed to claim rewards');
    }
  }
  const receiveTokens = async () => {
    try {
      if(!selectedAccount){
        toast.error('Connect wallet to receive tokens');
        return;
      }
      await receiveFreeTokens();
      toast.success('Tokens received successfully');
    }
    catch (error) {
      toast.error('Failed to receive tokens');
    }
  }


  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className='flex flex-col flex-wrap justify-center items-start p-4 bg-orange-400 h-auto w-96'>
        <p className='text-xl'>Token Balance: {tokenBalance ? tokenBalance : 'No data available'}</p>
        <p className='text-xl'>Staked Amount: {stakeAmount ? stakeAmount : 'No data available'}</p>
        <p className='text-xl'>Rewards Rate: 1% per day</p>
        <p className='text-xl'>Rewards Earned: {earnedRewards ? earnedRewards : 'No data available'}</p>
        <p className='text-xl'>Last Staked Time: {lastStakedTime ? lastStakedTime : 'No data available '}</p>
      </div>
      <button
        onClick={receiveTokens}
        className='bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300'
      >
         Receive 10 Free Tokens
      </button>
      <button
        onClick={claimRewards}
        className='bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 transition duration-300'
      >
        Claim Rewards
      </button>
    </div>
  );
};

export default Dashboard;