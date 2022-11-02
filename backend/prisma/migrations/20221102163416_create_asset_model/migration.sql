/*
  Warnings:

  - You are about to drop the column `holder` on the `Asset` table. All the data in the column will be lost.
  - Added the required column `address` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "holder",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
