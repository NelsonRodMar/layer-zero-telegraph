# LayerZero Telegraph

LayerZero Telegraph is a simple contract that use [LayerZero](https://layerzero.network/) technologies and allows you 
to send/emit messages from two blockchains, Arbitrum Goerli <=> Ethereum Goerli, here.


## How to deploy and use the contract
1. Install with `npm install`

2. Copy `.env.example` to `.env` and fill in the values


3.  
   a) In 'hardhat.config.ts' complete with Arbitrum Goerli and then run `npm run deploy --goerli` to deploy the contract. 
<br>
    b) Verify the contract on Etherscan with `npm run verify --goerli --contract <CONTRACT_ADDRESS>`
<br>
    c) Do the same thing with Ethereum Goerli.

   4. 
       a)Copy the contract address of each on and past in the corresponding variable in generateTrustedRemote.ts fil and then
   run `node scripts/generateTrustedRemote.ts` to generate the trusted remote contract.
   <br>
       b) Copy the past generated string and call the `setTrustedRemote(uint16 _srcChainId,bytes _path)` function of the contract with the
    corresponding chainId that you can found [here](https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses) 
   and the pasted string. Do this for each contract Arbitrum Goerli and Ethereum Goerli.

5. Enjoy and send message threw each chain. (After unpause the contract of course).