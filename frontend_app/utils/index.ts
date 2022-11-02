import axios from 'axios';

type nftProps = {
    title: string | undefined,
    image: any,
    network: number | null,
    address: string | undefined,
    id: number | undefined,
}

const networks = {
    1: "ETHEREUM",
    5: "ETHEREUM_GOERLI",
    137: "POLYGON",
    80001: "POLYGON_MUMBAI",
};

export const getAssets = async (address: string, baseURL: string): Promise<any> => {
    const request: any = {
        method: 'GET',
        url: `${baseURL}/getNFTs/?owner=${address}`,
    }

    const response = await axios(request)
    return response.data
}

export const login = async (email: string, password: string, baseURL: string): Promise<any> => {

    const data = JSON.stringify({ "email": email, "password": password });

    const request: any = {
        method: 'POST',
        url: `${baseURL}/login`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: data
    }

    const response = await axios(request)
    return response
}

export const register = async (name: string, email: string, password: string, baseURL: string): Promise<any> => {

    const data = JSON.stringify({ "name": name, "email": email, "password": password });

    const request: any = {
        method: 'POST',
        url: `${baseURL}/users/register`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: data
    }

    const response = await axios(request)
    return response
}

export const getUserData = async (baseURL: string): Promise<any> => {

    const auth = localStorage.getItem('userToken')

    const request: any = {
        method: 'GET',
        url: `${baseURL}/info`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        maxRedirects: 0,
        data: ''
    }

    const response = await axios(request)
    return response
}

export const createAsset = async ( asset : nftProps, baseURL: string ): Promise<any> => {

    const auth = localStorage.getItem('userToken')

    if(asset.network === null) {
        throw new Error("Network not found")
    }

    const data = {
        "name": asset.title,
        "address_id": `${asset.address}/${asset.id}`,
        "image": asset.image,
        "network": `${networks[asset.network]}`,
        "expiration": parseInt((Date.now()/1000 + 60*60*24*7).toString()).toString()
      };
    

    const request: any = {
        method: 'POST',
        url: `${baseURL}/assets`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        maxRedirects: 0,
        data: data
    }

    const response = await axios(request)
    return response
}

export const deleteAsset = async ( asset : nftProps, baseURL: string ): Promise<any> => {

    const auth = localStorage.getItem('userToken')

    const data = {
        "address": asset.address,
        "id": asset.id,
    };

    const request: any = {
        method: 'DELETE',
        url: `${baseURL}/assets`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        maxRedirects: 0,
        data: data
    }

    const response = await axios(request)
    return response
}

/* const assets = [
    {        
        name : "NFT Name",
        image : "https://ipfs.io/ipfs/Qm...",
        qrcode : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x2B57a6d9c5aC697d6BCDCB28ADB2e660640e0bc5",
        network : "ethereum",
        expiration : 1654000000, 
    },
    {
        name : "NFT Name",
        image : "https://ipfs.io/ipfs/Qm...",
        qrcode : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://testnets.opensea.io/assets/goerli/0xd7c84e8c2237262897212d86fb795ef6dae90890/2",
        network : "ethereum",
        expiration : 1654000000,
    },
]; */