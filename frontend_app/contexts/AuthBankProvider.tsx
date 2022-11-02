import AuthBankWrapper from "../blockchain/AuthBankWrapper";
import { createContext, useState, useEffect, useContext } from "react";
import { Web3ModalContext } from "./Web3ModalProvider";

interface IBlockchainContext {
    authBank: AuthBankWrapper | null;
}

export const BlockchainContext = createContext<IBlockchainContext>({
    authBank: null,
});

const BlockchainProvider = ({ children }) => {

    const { web3, chainId, account } = useContext(Web3ModalContext);

    const [authBank, setAuthBank] = useState<AuthBankWrapper | null>(null);

    useEffect(() => {
        if (chainId && account && web3) {
            try {
                const _authBank = new AuthBankWrapper(web3, chainId, account);
                setAuthBank(_authBank);
            } catch (err) {
                console.log(err);
            }            
        } else {
            setAuthBank(null);
        }
    }, [web3, chainId, account]);

    return (
        <BlockchainContext.Provider value={{ authBank }}>
            {children}
        </BlockchainContext.Provider>
    );
}

export default BlockchainProvider;