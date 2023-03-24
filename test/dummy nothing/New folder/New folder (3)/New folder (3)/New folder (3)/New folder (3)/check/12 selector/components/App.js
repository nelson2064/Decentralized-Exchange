import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3'
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadToken,
  loadExchange
} from '../store/interactions'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = await loadWeb3(dispatch)
    const networkId = await web3.eth.net.getId()
    const accounts = await loadAccount(web3, dispatch)
    const token = await loadToken(web3, networkId, dispatch)
    const exchange = await loadExchange(web3, networkId, dispatch)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#">Link 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Link 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Link 3</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <div className="vertical-split">
            <div className="card bg-dark text-white">
              <div className="card-header">
                Card Title
              </div>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" className="card-link">Card link</a>
              </div>
            </div>
            <div className="card bg-dark text-white">
              <div className="card-header">
                Card Title
              </div>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" className="card-link">Card link</a>
              </div>
            </div>
          </div>
          <div className="vertical">
            <div className="card bg-dark text-white">
              <div className="card-header">
                Card Title
              </div>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" className="card-link">Card link</a>
              </div>
            </div>
          </div>
          <div className="vertical-split">
            <div className="card bg-dark text-white">
              <div className="card-header">
                Card Title
              </div>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" className="card-link">Card link</a>
              </div>
            </div>
            <div className="card bg-dark text-white">
              <div className="card-header">
                Card Title
              </div>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" className="card-link">Card link</a>
              </div>
            </div>
          </div>
          <div className="vertical">
            <div className="card bg-dark text-white">
              <div className="card-header">
                Card Title
              </div>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" className="card-link">Card link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {                  //basically our component doesn't know about redux in one sense so we have to connect our component to part of bascially essentially store    > so we do is we gona something like map state props  so to get dispatch from props we have to add a two props
  return {
    // TODO: Fill me in...
  }
}

export default connect(mapStateToProps)(App);










// class App extends Component {
//   componentWillMount() {
//     this.loadBlockchainData()
//   }

//   async loadBlockchainData() {
//     const web3 = new Web3(window.ethereum)
//     const networkId = await web3.eth.net.getId()
//     const accounts = await web3.eth.getAccounts()
//     const token = new web3.eth.Contract(Token.abi, Token.networks[networkId].address) //this is the two main things to interact with smart contract 
//     const totalSupply = await token.methods.totalSupply().call()
//     console.log("totalSupply", totalSupply)
//   }














////

// import React, { Component } from 'react'; // Importing the React and Component modules from the 'react' library
// import './App.css'; // Importing the styles for the App component
// import Web3 from 'web3'; // Importing the Web3 module for interacting with the Ethereum network
// import Token from '../abis/Token.json'; // Importing the Token contract ABI from the JSON file

// class App extends Component {



//   async componentWillMount() { // Declaring an async function to load the Web3 provider and blockchain data before the component is mounted
//     await this.loadWeb3(); // Loading the Web3 provider
//     await this.loadBlockchainData(); // Loading the blockchain data for the Token contract
//   }



  // async loadWeb3() { // Declaring an async function to load the Web3 provider
  //   if (window.ethereum) { // Checking if the user has MetaMask installed
  //     await window.ethereum.enable(); // Prompting the user to connect their MetaMask account to the dApp
  //     window.web3 = new Web3(window.ethereum); // Setting the Web3 object to use MetaMask as the provider
  //   } else if (window.web3) { // Checking if the user has an older version of Web3 installed
  //     window.web3 = new Web3(window.web3.currentProvider); // Setting the Web3 object to use the provider of the older version of Web3
  //   }   
  //   // If neither Metamask nor an older version of Web3 is detected, connect to the local blockchain network
  //   else {
  //     const provider = new Web3.providers.HttpProvider(' http://127.0.0.1:9545/');
  //     window.web3 = new Web3(provider);
  //     console.log('No web3 instance injected, using Local web3.');
  //   }
  // }


//   async loadBlockchainData() { // Declaring an async function to load the blockchain data for the Token contract
//     const web3 = window.web3; // Setting the Web3 object to use the provider that was previously set in loadWeb3()
//    const network  =   await web3.eth.net.getNetworkType();
//     const accounts = await web3.eth.getAccounts(); // Getting the user's Ethereum accounts
//     const networkId = await web3.eth.net.getId(); // Getting the ID of the Ethereum network that the user is connected to
   
   
//     console.log('accounts:', accounts); // Logging the user's Ethereum accounts to the console
//     console.log('network:', network); // Logging the user's Ethereum accounts to the console
//     console.log('networkId:', networkId); // Logging the user's Ethereum accounts to the console







//    ////////////////////////////here is abi and address this is a two pieces of information we need in order to build smart contract with web3 and interacting with blockchain

//    // console.log("abi", Token.abi)
// // console.log("address", Token.networks[networkId].address)


// //here is abi and address this is a two pieces of information we need in order to build smart contract with web3 and interacting with blockchain
// const token = new web3.eth.Contract(Token.abi, Token.networks[networkId].address)
// console.log("token",token);
// // const totalSupply = await token.methods.totalSupply().call(); //call method read information from the blockchain smart contract itself // Getting the total supply of tokens from the Token contract
// // console.log(totalSupply);

// //////////////////////////////////////////////////////////////////////////





//     // const networkData = Token.networks[networkId]; // Getting the network data for the Token contract based on the network ID
    
//     // if (networkData) { // Checking if the Token contract has been deployed to the network that the user is connected to
//     //   const token = new web3.eth.Contract(Token.abi, networkData.address); // Creating a new instance of the Token contract using the ABI and contract address from the JSON file
//     //   const totalSupply = await token.methods.totalSupply().call(); // Getting the total supply of tokens from the Token contract
//     //   console.log('totalSupply:', totalSupply); // Logging the total supply of tokens to the console
//     // } else { // If the Token contract has not been deployed to the network that the user is connected to
//     //   console.log('Token contract not deployed to detected network.'); // Logging a message to the console to inform the user that the Token contract has not been deployed to the network
//     // }
    
//   }
