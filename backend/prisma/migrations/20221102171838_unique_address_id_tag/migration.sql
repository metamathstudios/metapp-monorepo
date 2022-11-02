/*
  Warnings:

  - You are about to drop the column `address` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `revoked` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `tokenId` on the `Asset` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address_id]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address_id` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "address",
DROP COLUMN "revoked",
DROP COLUMN "tokenId",
ADD COLUMN     "address_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Asset_address_id_key" ON "Asset"("address_id");
