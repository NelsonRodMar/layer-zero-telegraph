const ethers = require("ethers");

// See here for more information on Trusted Remote : https://layerzero.gitbook.io/docs/evm-guides/master/set-trusted-remotes#trusted-remote-usages
// See here for chainId for LayerZero and more information on networks : https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses#goerli-ethereum-testnet
const addressEthereumGoerli = "", addressArbitrumGoerli = "";
let trustedRemoteAGoerliEGoerli = ethers.utils.solidityPack(
    ['address', 'address'],
    [
        ethers.utils.getAddress(addressEthereumGoerli),
        ethers.utils.getAddress(addressArbitrumGoerli),
    ]
)

console.log("Trusted remote for Arbitrum Goerli : ", trustedRemoteAGoerliEGoerli," and destination chain id : ", 10121);

let trustedRemoteEGoerliAGoerli = ethers.utils.solidityPack(
    ['address', 'address'],
    [
        ethers.utils.getAddress(addressArbitrumGoerli),
        ethers.utils.getAddress(addressEthereumGoerli),
    ]
)


console.log("Trusted remote for Ethereum Goerli : ", trustedRemoteEGoerliAGoerli ," and destination chain id : ", 10143);
