/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  env: {
    ALCHEMY_URL_ETHEREUM : process.env.ALCHEMY_URL_ETHEREUM,
    ALCHEMY_URL_POLYGON : process.env.ALCHEMY_URL_POLYGON,
    ALCHEMY_URL_GOERLI : process.env.ALCHEMY_URL_GOERLI,
    ALCHEMY_URL_MUMBAI : process.env.ALCHEMY_URL_MUMBAI,
    METAPP_API_URL : process.env.METAPP_API_URL
  }
}
