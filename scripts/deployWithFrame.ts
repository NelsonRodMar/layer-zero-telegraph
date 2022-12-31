import {ethers, network} from "hardhat";
require('dotenv').config();

function Ask(query: string) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return  new Promise(resolve => readline.question(query, (ans: string) => {
    readline.close();
    resolve(ans);
  }))
}

async function main() {
  console.log("Network name : ", network.name);
  console.log("/!\\ Be sure to have well configure the url in hardhat.config.ts /!\\");

  let Telegraph;

  if (network.name === "goerli") {
    var answer = await Ask('Where do you want to deploy Ethereum Goerli ou Arbitrum Goerli ? [e/a] ')
    if (answer === "e") {
      Telegraph = await ethers.getContractFactory("TelegraphEGoerli");
    } else if (answer === "a") {
      Telegraph = await ethers.getContractFactory("TelegraphAGoerli");
    } else {
      console.log('Wrong answer, script abort !');
      process.exit(1);
    }
  } else {
    throw new Error("Network not supported");
  }


  // This script is just for deploying with Hardware Wallets.
  // Deploy with Frame src : https://github.com/NomicFoundation/hardhat/issues/1159#issuecomment-789310120

  // Create a Frame connection
  const ethProvider = require('eth-provider') // eth-provider is a simple EIP-1193 provider
  const frame = ethProvider('frame') // Connect to Frame

  // Use `getDeployTransaction` instead of `deploy` to return deployment data
  const telegraph = await Telegraph.getDeployTransaction();

  // Set `tx.from` to current Frame account
  telegraph.from = (await frame.request({ method: 'eth_requestAccounts' }))[0]

  // Sign and send the transaction using Frame
  const result = await frame.request({ method: 'eth_sendTransaction', params: [telegraph] })

  console.log(`Telegraph deployed to ${result.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
