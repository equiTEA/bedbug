/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRoleType" AS ENUM ('ADMIN', 'MODERATOR', 'TENANT', 'LANDLORD', 'PROPERTY_MANAGEMENT_COMPANY');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "banned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "UserRoleType";
