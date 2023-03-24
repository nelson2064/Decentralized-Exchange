require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {      //create new network here name kovan
      provider: function() {            //specify provider  //we need to connect kovan with etherum provider  //we do like this 
        return new HDWalletProvider(              //we pass provider but how do we get it the provider came from truffle hdwalletprovider  that gona be hirecrethial determinastic wallet like we talk about to intor to wallet seccison  basically its gona create a wallet  that is gernerated from private key that is here in ganche lets take the private kkey and gernate our wallet  
          privateKeys.split(','), // Array of account private keys     // need private key   so it know which accountt that it can connect to the netwrok      
          `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`//need  Url to an Ethereum Node                                  //infura is basically etherum node service singup and take api key       
        )
      },
      gas: 5000000, //specify gas limit
      gasPrice: 25000000000,      //specify gas price 
      network_id: 42          //specify network id which for koven is 42
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}