import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
require('dotenv').config();

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    defaultNetwork: "goerli",
    networks: {
        goerli: {
            url: process.env.URL_ALCHEMY_AGOERLI,
            accounts: [process.env.PRIVATE_KEY]
        }
    },
    etherscan: {
        apiKey: {
            goerli: process.env.ETHERSCAN_API_KEY_GOERLI,
            arbitrumGoerli: process.env.ETHERSCAN_API_KEY_AGOERLI
        }
    }
};

export default config;