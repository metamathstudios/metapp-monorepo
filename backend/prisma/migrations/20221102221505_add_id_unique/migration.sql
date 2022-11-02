/*
  Warnings:

  - A unique constraint covering the columns `[address_id]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Asset_address_id_key" ON "Asset"("address_id");
