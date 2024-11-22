import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import Web3 from 'web3';
import StakingContractABI from '../../abi/StakingABI.js';
import StakeTokenContractABI from '../../abi/StakeTokenABI.js';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [tokenBalance, setTokenBalance] = useState('');
  const [stakeAmount, setStakeAmount] = useState('');
  const [earnedRewards, setEarnedRewards] = useState('');
  const [lastStakedTime, setLastStakedTime] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      setSelectedAccount(null);
    } else {
      setSelectedAccount(accounts[0]);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('Metamask is not installed');
      }

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const selectedAccount = accounts[0];
      if (!selectedAccount) {
        throw new Error('No ethereum accounts available');
      }

      const web3 = new Web3(window.ethereum);

      setProvider(web3);
      setSelectedAccount(selectedAccount);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      throw error;
    }
  };

  const disconnectWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('Metamask is not installed');
      }

      setProvider(null);
      setSelectedAccount(null);
      setEarnedRewards('');
      setStakeAmount('');
      setLastStakedTime('');
      
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      throw error;
    }
  };

  const getContracts = useCallback(() => {
    if (!provider) {
      throw new Error('Please connect wallet');
    }

    const StakingContractAddress = '0xb1a7Ab0890CcC0d4B4A4298DeE8766F45b0Bf0d7';
    const StakeTokenContractAddress = '0xE7383b20B73905195E1c71992F1586e8a432dab5';

    const StakingContract = new provider.eth.Contract(StakingContractABI, StakingContractAddress);
    const StakeTokenContract = new provider.eth.Contract(StakeTokenContractABI, StakeTokenContractAddress);

    

    return { StakingContract, StakeTokenContract, StakingContractAddress };
  }, [provider]);

  const fetchTokenBalance = useCallback(async () => {
    try {
      const { StakeTokenContract } = getContracts();
      const tokenBalance = await StakeTokenContract.methods.balanceOf(selectedAccount).call();
    const tokenBalanceInEther = provider.utils.fromWei(tokenBalance, 'ether');
    setTokenBalance(parseFloat(tokenBalanceInEther).toFixed(4).toString());
    } catch (error) {
      console.error('Failed to fetch token balance:', error);
      throw error;
    }
  }, [getContracts, selectedAccount]);

  const fetchStakingData = useCallback(async () => {
    try {
      const { StakingContract } = getContracts();

      const amount = await StakingContract.methods.stakedBalance(selectedAccount).call();
      const rewards = await StakingContract.methods.rewards(selectedAccount).call();
      const timestamp = await StakingContract.methods.lastStakedTime(selectedAccount).call();
      console.log('timestamp', timestamp);
      const amountInEther = provider.utils.fromWei(amount, 'ether');
      const rewardsInEther = provider.utils.fromWei(rewards, 'ether');

      setStakeAmount(parseFloat(amountInEther).toFixed(4).toString());
      setEarnedRewards(parseFloat(rewardsInEther).toFixed(4).toString());

      const date = new Date(Number(timestamp) * 1000).toLocaleString();
      console.log("date", date);

      setLastStakedTime(date.toString());


    } catch (error) {
      console.error('Failed to fetch staking data:', error);
      throw error;
    }
  }, [getContracts, selectedAccount]);

  useEffect(() => {
    if (selectedAccount) {
      fetchTokenBalance();
      fetchStakingData();
    }
  }, [selectedAccount, fetchStakingData]);




  const stake = async (amount) => {
    try {
      const { StakingContract, StakeTokenContract, StakingContractAddress } = getContracts();
      const amountInWei = provider.utils.toWei(amount, 'ether');

      await StakeTokenContract.methods.approve(StakingContractAddress, amountInWei).send({ from: selectedAccount });
      await StakingContract.methods.stake(amountInWei).send({ from: selectedAccount });

      console.log('Staked successfully');
      fetchStakingData();
    } catch (error) {
      console.error('Failed to stake:', error);
      throw error;
    }
  };

  const withdraw = async (amount) => {
    try {
      const { StakingContract } = getContracts();
      const amountInWei = provider.utils.toWei(amount, 'ether');

      await StakingContract.methods.unstake(amountInWei).send({ from: selectedAccount });

      console.log('Withdrawn successfully');
      fetchStakingData();
    } catch (error) {
      console.error('Failed to withdraw:', error);
      throw error;
    }
  };

  const claim = async () => {
    try {
      const { StakingContract } = getContracts();

      await StakingContract.methods.claimRewards().send({ from: selectedAccount });

      console.log('Claimed successfully');
      fetchStakingData();
    } catch (error) {
      console.error('Failed to claim:', error);
      throw error;
    }
  };

  return (
    <WalletContext.Provider
      value={{
        provider,
        selectedAccount,
        connectWallet,
        disconnectWallet,
        tokenBalance,
        stakeAmount,
        earnedRewards,
        lastStakedTime,
        stake,
        withdraw,
        claim,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};