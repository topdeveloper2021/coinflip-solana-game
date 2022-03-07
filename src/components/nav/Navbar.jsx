import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import logoImg from '../../assets/logo.png';
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import React, {useState, useEffect} from "react";
import './Navbar.css';
import {Connection, PublicKey, clusterApiUrl} from "@solana/web3.js";
import {Program, Provider, web3 } from '@project-serum/anchor';

function Navbar() {
  const {publicKey, wallet } = useWallet();
  const [balance, setBalance] = useState(0);
  useEffect(async()=>{
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');
    if(publicKey){
      const res =await connection.getBalance(publicKey);
      setBalance(res/1000000000);
    }   
  }, [publicKey]);
  return (   
        <div className="col-12 top-nav">       
          <div className="col-sm-12 col-md-12 col-lg-12 wallet-buttons my-3">
            {wallet && <div className="balance-btn">Balance: {balance.toFixed(2)} SOL </div>}
            <WalletMultiButton />
          </div>
        </div>
  );
};
export default Navbar;
