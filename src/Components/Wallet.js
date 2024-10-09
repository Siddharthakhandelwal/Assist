import React from "react";
import "../styles/Wallet.css";

function Wallet() {
  return (
    <div className="wallet">
      <h2>Wallet</h2>
      <p>Current Balance: $5000</p>
      <button className="withdraw-btn">Withdraw</button>
    </div>
  );
}

export default Wallet;
