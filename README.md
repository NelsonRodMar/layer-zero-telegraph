# LayerZero Telegraph

LayerZero Telegraph is a simple contract that use [LayerZero](https://layerzero.network/) technologies and allows you 
to send/emit messages from two blockchains, Arbitrum Goerli <=> Ethereum Goerli, here.


## How to deploy and use the contract
1. Install with `npm install`
<br>
<br>
2. Copy `.env.example` to `.env` and fill in the values
<br>
<br>
3.  
   a) In 'hardhat.config.ts' complete with Arbitrum Goerli and then run `npx hardhat run script/deploy.ts --network goerli` to deploy the contract. 
<br>
    b) Verify the contract on Etherscan with `npx hardhat verify --network arbitrumGoerli <CONTRACT_ADDRESS> --contract contracts/TelegraphAGoerli.sol:TelegraphAGoerli`
<br>
    c) Do the same thing with Ethereum Goerli.
<br>
<br>
4. 
    a)Copy the contract address of each on and past in the corresponding variable in generateTrustedRemote.ts fil and then
run `node scripts/generateTrustedRemote.ts` to generate the trusted remote contract.
<br>
    b) Copy the past generated string and call the `setTrustedRemote(uint16 _srcChainId,bytes _path)` function of the contract with the
 corresponding chainId that you can found [here](https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses) 
and the pasted string. Do this for each contract Arbitrum Goerli and Ethereum Goerli.
<br>
<br>
5. Enjoy and send message threw each chain. (After unpause the contract of course).

## How to use the contract ?

📇 Contract on Arbitrum Goerli : [0xea76dd45D3024c0f1166562ed3c1966307416eAC](https://goerli.arbiscan.io/address/0xea76dd45d3024c0f1166562ed3c1966307416eac)
<br>
📇 Contract on Ethereum Goerli : [0x5EFc1F6e49Beaa2276aF4D67AaA69119044e0dd9](https://goerli.etherscan.io/address/0x5efc1f6e49beaa2276af4d67aaa69119044e0dd9)
<br>
<br>
1) To send a Telegraph from Arbitrum Goerli to Ethereum Goerli you can use the `sendTelegraph(uint16 _srcChainId,bytes _message)` function, you 
can call this function here [here](https://goerli.arbiscan.io/address/0xea76dd45d3024c0f1166562ed3c1966307416eac#writeContract).
<br>For the price put 0.1 Ether to avoid a stuck message, don't worry the contract will refund you if you send to much ether. 
Then for `_dstChainId` put `10121` to send a message to Ethereum Goerli and for `_message` put the message you want to send.
<br>
2) When the message is send check the event section [here](https://goerli.arbiscan.io/address/0xea76dd45d3024c0f1166562ed3c1966307416eac#events) check `TelegraphSent` to see if the message is send.
<br>
3) To know if the message is received, check the event section on the other side [here](https://goerli.etherscan.io/address/0x5efc1f6e49beaa2276af4d67aaa69119044e0dd9#events) check `TelegraphReceived` to see if the message is received.