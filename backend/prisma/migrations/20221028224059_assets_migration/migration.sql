-- CreateEnum
CREATE TYPE "Network" AS ENUM ('ETHEREUM', 'POLYGON', 'ETHEREUM_GOERLI', 'POLYGON_MUMBAI');

-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "network" "Network" NOT NULL,
    "expiration" TEXT NOT NULL,
    "holder" TEXT NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);
