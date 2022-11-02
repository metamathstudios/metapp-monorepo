import { Network } from "@prisma/client"

// oslink has Network as key and string as value

// oslink[Network] returns string

export const oslink : { [Key in Network as string]? : string} = {
    POLYGON_MUMBAI : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://testnets.opensea.io/assets/mumbai/",
    ETHEREUM_GOERLI : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://testnets.opensea.io/assets/goerli/",
    ETHEREUM : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://opensea.io/assets/ethereum/",
    POLYGON : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://opensea.io/assets/matic/",
}