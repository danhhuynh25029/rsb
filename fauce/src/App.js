import { useEffect, useState } from 'react';
import './App.css';
import Web3 from 'web3';
import detectEthereumProvider from "@metamask/detect-provider"
import React from 'react';
function App() {
  const [web3Api,setWeb3Api] = useState({
    provider : null,
    web3 : null,
  })

  const [account,setAccount] = useState(null)
  
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        provider.request({method : "eth_requestAccounts"})
        setWeb3Api({
          web3 : new Web3(provider),
          provider
        })
      } else{
        console.log("please connect to metamask")
      }
    }
    loadProvider() 
  },[])

  useEffect(() => {
    const getAccount = async () => { 
    const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    }
    web3Api.web3 && getAccount()
},[web3Api.web3])

  return (
    <div className="App">
        <h1>Address : {account ? account : "account denied"}</h1>
    </div>
  );
}

export default App;
