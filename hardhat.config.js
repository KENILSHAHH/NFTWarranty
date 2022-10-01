require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey=fs.readFileSync(".secret").toString();
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
require('dotenv').config();
module.exports = {
  defaultNetwork:  "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    // mumbai: {
    //   // Infura
    //   // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.privateKey]
    // },
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_TESTNET_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

