export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PRIVATE_KEY: string;
            URL_ALCHEMY_GOERLI: string;
            URL_ALCHEMY_AGOERLI: string;
            ETHERSCAN_API_KEY_GOERLI: string;
            ETHERSCAN_API_KEY_AGOERLI: string;
        }
    }
}
