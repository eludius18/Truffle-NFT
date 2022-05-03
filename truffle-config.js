const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const HDWalletProvider_ = require("truffle-hdwallet-provider");
require('dotenv').config()

private_key=''
mneumonic_key=''


module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider([private_key], "https://ropsten.infura.io/v3/YOUR_KEY");
      },
      network_id: 3,
      gas: 5000000,
      skipDryRun: true,
      gasPrice: 20000000000
    }

   },
  compilers: {
    solc: {
      version: "0.8.0"
    } 
  }
};