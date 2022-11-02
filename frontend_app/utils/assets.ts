export const formatIpfsLink = (link: string | undefined) : string => {
    
    if (!link) {
        return `${location.origin}/noimage.png`
    }

    if (link.includes('ipfs://')) {
        return link.replace('ipfs://', 'https://ipfs.io/ipfs/')
    } else if (link.includes('data:image/svg+xml')) {
        return  `${location.origin}/noimage.png`
    } else if (link.includes('.mp4')){
        return  `${location.origin}/noimage.png`
    } else {
        return link
    }
}

export const validId = (tokenId :string , name:string ) : boolean => {
    if(name?.includes('.eth')) {
        return true
    }
    const _id = parseInt(tokenId.slice(2), 16)
    return _id > 0 && _id < 1000000
} 