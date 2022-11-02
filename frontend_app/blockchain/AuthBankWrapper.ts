import Web3 from 'web3';
import AuthBank from './contracts/AuthBank';
import { AuthBankAddress } from './constants';

export default class AuthBankWrapper {
    web3: Web3;
    chainId: number;
    account: string;
    wrapperOptions: any;
    Contract: AuthBank;

    constructor(web3, chainId, account, options = {}) {
        this.web3 = web3;
        this.chainId = chainId;
        this.account = account;
        this.wrapperOptions = { web3, chainId, account, ...options }
        this.Contract = new AuthBank(this.wrapperOptions, AuthBankAddress[this.chainId]);
    }
    
    async getTokenAuthIndex(tokenAddr: string, tokenId: number): Promise<unknown> {
        try {
            const index = await this.Contract.call('getTokenAuthIndex', this.account, tokenAddr, tokenId);
            return index;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async createAuth(tokenAddr: string, tokenId: number): Promise<unknown> {
        const expiration = Math.floor(Date.now()/1000) + 7*24*60*60;
        try {
            const tx = await this.Contract.send('createAuth', {from: this.account}, tokenAddr, tokenId, expiration);
            return tx;
        } catch (error) {
            throw error;
        }
    }

    async revokeAuth(tokenAddr: string, tokenId: number): Promise<unknown> {
        try {
            const tx = await this.Contract.send('revokeAuth', {from: this.account}, tokenAddr, tokenId);
            return tx;
        } catch (error) {
            throw error;
        }
    }

}