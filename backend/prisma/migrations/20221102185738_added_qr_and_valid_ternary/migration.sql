/*
  Warnings:

  - Added the required column `qr_code` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asset" ADD COLUMN     "qr_code" TEXT NOT NULL,
ADD COLUMN     "valid" BOOLEAN NOT NULL DEFAULT true;
