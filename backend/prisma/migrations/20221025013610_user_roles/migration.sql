-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "Roles"[] DEFAULT ARRAY['USER']::"Roles"[];
