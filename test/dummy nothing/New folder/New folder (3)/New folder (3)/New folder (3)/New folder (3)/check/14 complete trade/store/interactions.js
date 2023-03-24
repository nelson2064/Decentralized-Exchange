import Web3 from 'web3'
import {
  web3Loaded,
  web3AccountLoaded,
  tokenLoaded,
  exchangeLoaded,
  cancelledOrdersLoaded,
  filledOrdersLoaded,
  allOrdersLoaded
} from './actions'
import Token from '../abis/Token.json'
import Exchange from '../abis/Exchange.json'

// export const loadWeb3 = async (dispatch) => {
//   if(typeof window.ethereum!=='undefined'){
//     const web3 = new Web3(window.ethereum)
//     dispatch(web3Loaded(web3))
//     return web3
//   } else {
//     window.alert('Please install MetaMask')
//     window.location.assign("https://metamask.io/")
//   }
// }


export const loadWeb3 = async (dispatch) => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);
      dispatch(web3Loaded(web3));
      return web3;
    } catch (error) {
      window.alert('You need to allow access to your account.');
      return null;
    }
  } else if (typeof window.web3 !== 'undefined') { // check for an older version of Web3
    const web3 = new Web3(window.web3.currentProvider);
    dispatch(web3Loaded(web3));
    return web3;
  } else { // connect to local blockchain network
    const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545/');
    const web3 = new Web3(provider);
    console.log('No web3 instance injected, using Local web3.');
    dispatch(web3Loaded(web3));
    return web3;
  }
};


export const loadAccount = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts()
  const account = await accounts[0]
  if(typeof account !== 'undefined'){
    dispatch(web3AccountLoaded(account))
    return account
  } else {
    window.alert('Please login with MetaMask')
    return null
  }
}

export const loadToken = async (web3, networkId, dispatch) => {
  try {
    const token = new web3.eth.Contract(Token.abi, Token.networks[networkId].address)
    dispatch(tokenLoaded(token))
    return token
  } catch (error) {
    console.log('Contract not deployed to the current network. Please select another network with Metamask.')
    return null
  }
}

export const loadExchange = async (web3, networkId, dispatch) => {
  try {
    const exchange = new web3.eth.Contract(Exchange.abi, Exchange.networks[networkId].address)
    dispatch(exchangeLoaded(exchange))
    return exchange
  } catch (error) {
    console.log('Contract not deployed to the current network. Please select another network with Metamask.')
    return null
  }
}

export const loadAllOrders = async (exchange, dispatch) => {
  // Fetch cancelled orders with the "Cancel" event stream
  const cancelStream = await exchange.getPastEvents('Cancel', { fromBlock: 0, toBlock: 'latest' })  // cancel  and adding some fillter that gona look entire blockchain we can spefity smaller rangein the blockcahin by saying specfying blocknumber but it gona look all here  
  // console.log(cancelStream)                //to check it work or not so you can check directlly writing code herer and writing code in fronted to chekc you don't have to code for action and stuff things 


  // Format cancelled orders                      //proper format
  const cancelledOrders = cancelStream.map((event) => event.returnValues)
     // console.log( cancelledOrders)
  // Add cancelled orders to the redux store
  dispatch(cancelledOrdersLoaded(cancelledOrders))


  // Fetch filled orders with the "Trade" event stream
  const tradeStream = await exchange.getPastEvents('Trade', { fromBlock: 0, toBlock: 'latest' })
  // Format filled orders
  const filledOrders = tradeStream.map((event) => event.returnValues)
  // Add cancelled orders to the redux store
  dispatch(filledOrdersLoaded(filledOrders))

  // Load order stream
  const orderStream = await exchange.getPastEvents('Order', { fromBlock: 0,  toBlock: 'latest' })
  // Format order stream
  const allOrders = orderStream.map((event) => event.returnValues)
  // Add open orders to the redux store
  dispatch(allOrdersLoaded(allOrders))
}















