import React,{useState} from 'react'
import { WalletProvider } from './context/walletcontext'
import ConnectWallet from './components/ConnectWallet'
import Dashboard from './components/Dashboard'
import StakeToken from './components/StakeToken'
import WithdrawToken from './components/WithdrawToken'
import { ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [tab, setTab] = useState('stake');
  return (
    <WalletProvider>
      <div className='bg-gray-100 flex flex-col justify-center items-center h-dvh w-screen' >

        <div className=' text-center text-5xl pt-5 font-extrabold underline'>Staking Dapp</div>
        <div className='flex md:absolute top-8 right-10'> <ConnectWallet /></div>
        <div className='flex flex-col justify-center items-center p-4 gap-2'>
        <h1 className='text-3xl text-center font-semibold'>Dashboard</h1>
        <Dashboard />
        </div>
        
        <div className='flex justify-center items-center gap-4 '>
          <button onClick={() => setTab('stake')} className={`px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ${tab === 'stake' ? 'bg-gray-700' : ''}`}>Stake</button>
          <button onClick={() => setTab('withdraw')} className={`px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ${tab === 'withdraw' ? 'bg-gray-700' : ''}`}>Withdraw</button>
        </div>
        {
          (tab==="stake") ? <StakeToken /> : <WithdrawToken />
        }
        
      </div>
      <ToastContainer position='bottom-right' autoClose={5000}  />
    </WalletProvider>
  )
}

export default App