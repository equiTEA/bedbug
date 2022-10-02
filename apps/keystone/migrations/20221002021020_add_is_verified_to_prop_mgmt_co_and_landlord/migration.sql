-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PropertyManagementCompany" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;
