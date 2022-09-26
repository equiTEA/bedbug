/*
  Warnings:

  - You are about to drop the `_Address_currentPropertyManagementCompany` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Address_currentPropertyManagementCompany" DROP CONSTRAINT "_Address_currentPropertyManagementCompany_A_fkey";

-- DropForeignKey
ALTER TABLE "_Address_currentPropertyManagementCompany" DROP CONSTRAINT "_Address_currentPropertyManagementCompany_B_fkey";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "currentPropertyManagementCompany" TEXT;

-- DropTable
DROP TABLE "_Address_currentPropertyManagementCompany";

-- CreateIndex
CREATE INDEX "Address_currentPropertyManagementCompany_idx" ON "Address"("currentPropertyManagementCompany");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_currentPropertyManagementCompany_fkey" FOREIGN KEY ("currentPropertyManagementCompany") REFERENCES "PropertyManagementCompany"("id") ON DELETE SET NULL ON UPDATE CASCADE;
