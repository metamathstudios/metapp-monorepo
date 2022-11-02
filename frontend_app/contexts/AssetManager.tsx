import { createContext, useCallback, useState } from "react";
import { getAssets } from "../utils";
import { rpcUrls } from "../blockchain/constants";
import { formatIpfsLink, validId } from "../utils/assets";

export type Asset = {
    name: string;
    image: string;
    network: number;
    id: number;
    isERC721: boolean;
    contractAddress: string;
};

interface IAssetManagerContext {
    balance: number;
    assets: Asset[];
    fetch: (chainId: number, address: string) => void;
}

export const AssetManagerContext = createContext<IAssetManagerContext>({
    balance: 0,
    assets: [],
    fetch: (chainId: number, address: string) => {},
});

const AssetManager = ({ children }) => {
    const [assets, setAssets] = useState<Asset[]>([]);
    const [balance, setBalance] = useState<number>(0);

    const fetch = useCallback((chainId: number, address: string) => {

        const _baseUrl = rpcUrls[chainId];

        getAssets(address, _baseUrl)
            .then((assets) => {
                let _assets : Asset[] = [];
                setBalance(assets.ownedNfts.length)
                for(let i = 0; i < assets.ownedNfts.length; i++) {

                const _asset: Asset = {
                    name: assets.ownedNfts.at(i).metadata.name,
                    image: formatIpfsLink(assets.ownedNfts.at(i).metadata.image),
                    network: chainId,
                    id: parseInt(assets.ownedNfts.at(i).id.tokenId.slice(2), 16),
                    isERC721: validId(assets.ownedNfts.at(i).id.tokenId, assets.ownedNfts.at(i).metadata.name),
                    contractAddress: assets.ownedNfts.at(i).contract.address,
                };

                _assets.push(_asset);
            }

            setAssets(_assets);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <AssetManagerContext.Provider
            value={{
                balance,
                assets,
                fetch,
            }}
        >
            {children}
        </AssetManagerContext.Provider>
    );
}

export default AssetManager;