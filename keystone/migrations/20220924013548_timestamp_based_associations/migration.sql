/*
  Warnings:

  - You are about to drop the column `currentLandlord` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `currentPropertyManagementCompany` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the `_Address_previousLandlords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Address_previousPropertyManagementCompanies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Address_ratings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Landlord_ratings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PropertyManagementCompany_ratings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_currentLandlord_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_currentPropertyManagementCompany_fkey";

-- DropForeignKey
ALTER TABLE "_Address_previousLandlords" DROP CONSTRAINT "_Address_previousLandlords_A_fkey";

-- DropForeignKey
ALTER TABLE "_Address_previousLandlords" DROP CONSTRAINT "_Address_previousLandlords_B_fkey";

-- DropForeignKey
ALTER TABLE "_Address_previousPropertyManagementCompanies" DROP CONSTRAINT "_Address_previousPropertyManagementCompanies_A_fkey";

-- DropForeignKey
ALTER TABLE "_Address_previousPropertyManagementCompanies" DROP CONSTRAINT "_Address_previousPropertyManagementCompanies_B_fkey";

-- DropForeignKey
ALTER TABLE "_Address_ratings" DROP CONSTRAINT "_Address_ratings_A_fkey";

-- DropForeignKey
ALTER TABLE "_Address_ratings" DROP CONSTRAINT "_Address_ratings_B_fkey";

-- DropForeignKey
ALTER TABLE "_Landlord_ratings" DROP CONSTRAINT "_Landlord_ratings_A_fkey";

-- DropForeignKey
ALTER TABLE "_Landlord_ratings" DROP CONSTRAINT "_Landlord_ratings_B_fkey";

-- DropForeignKey
ALTER TABLE "_PropertyManagementCompany_ratings" DROP CONSTRAINT "_PropertyManagementCompany_ratings_A_fkey";

-- DropForeignKey
ALTER TABLE "_PropertyManagementCompany_ratings" DROP CONSTRAINT "_PropertyManagementCompany_ratings_B_fkey";

-- DropIndex
DROP INDEX "Address_currentLandlord_idx";

-- DropIndex
DROP INDEX "Address_currentPropertyManagementCompany_idx";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "currentLandlord",
DROP COLUMN "currentPropertyManagementCompany";

-- AlterTable
ALTER TABLE "Rating" ADD COLUMN     "address" TEXT,
ADD COLUMN     "doingBusinessAsAtDateOfRating" TEXT,
ADD COLUMN     "landlordAtDateOfRating" TEXT,
ADD COLUMN     "propertyManagementCompanyAtDateOfRating" TEXT;

-- DropTable
DROP TABLE "_Address_previousLandlords";

-- DropTable
DROP TABLE "_Address_previousPropertyManagementCompanies";

-- DropTable
DROP TABLE "_Address_ratings";

-- DropTable
DROP TABLE "_Landlord_ratings";

-- DropTable
DROP TABLE "_PropertyManagementCompany_ratings";

-- CreateIndex
CREATE INDEX "Rating_address_idx" ON "Rating"("address");

-- CreateIndex
CREATE INDEX "Rating_landlordAtDateOfRating_idx" ON "Rating"("landlordAtDateOfRating");

-- CreateIndex
CREATE INDEX "Rating_doingBusinessAsAtDateOfRating_idx" ON "Rating"("doingBusinessAsAtDateOfRating");

-- CreateIndex
CREATE INDEX "Rating_propertyManagementCompanyAtDateOfRating_idx" ON "Rating"("propertyManagementCompanyAtDateOfRating");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_address_fkey" FOREIGN KEY ("address") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_doingBusinessAsAtDateOfRating_fkey" FOREIGN KEY ("doingBusinessAsAtDateOfRating") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_landlordAtDateOfRating_fkey" FOREIGN KEY ("landlordAtDateOfRating") REFERENCES "Landlord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_propertyManagementCompanyAtDateOfRating_fkey" FOREIGN KEY ("propertyManagementCompanyAtDateOfRating") REFERENCES "PropertyManagementCompany"("id") ON DELETE SET NULL ON UPDATE CASCADE;
