import { useEffect, useState } from 'react'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'

import { contractABI, contractAddress } from '@block-full-stack-org/utils'

declare global {
  interface Window {
    ethereum: any
    web3: any
  }
}

// Replace with your contract's deployed address

export const useAccount = () => {
  const [account, setAccount] = useState('')
  const [contract, setContract] = useState<Contract | null>()

  useEffect(() => {
    loadWeb3()
    loadBlockchainData()
  }, [])

  const loadWeb3 = async () => {
    if (window?.ethereum) {
      window.web3 = new Web3(window.ethereum as any)
      await window.ethereum.enable()
    } else if (window?.web3) {
      window.web3 = new Web3(window?.web3.currentProvider)
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!',
      )
    }
  }

  const loadBlockchainData = async () => {
    const web3 = window?.web3
    const accounts = await web3?.eth.getAccounts()
    setAccount(accounts[0])

    // Create a new instance of the contract
    const contract = new web3.eth.Contract(contractABI, contractAddress)
    setContract(contract)
  }

  return { account, contract }
}
