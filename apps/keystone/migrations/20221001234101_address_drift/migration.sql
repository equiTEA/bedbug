-- CreateEnum
CREATE TYPE "UserRoleType" AS ENUM ('ADMIN', 'MODERATOR', 'TENANT', 'LANDLORD', 'PROPERTY_MANAGEMENT_COMPANY');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "role" "UserRoleType",

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedBy" TEXT,
    "address" TEXT,
    "landlordAtDateOfRating" TEXT,
    "doingBusinessAsAtDateOfRating" TEXT,
    "propertyManagementCompanyAtDateOfRating" TEXT,
    "sentiment" INTEGER,
    "body" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedBy" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "full" TEXT NOT NULL DEFAULT E'',
    "line1" TEXT NOT NULL DEFAULT E'',
    "line2" TEXT NOT NULL DEFAULT E'',
    "line3" TEXT NOT NULL DEFAULT E'',
    "city" TEXT NOT NULL DEFAULT E'',
    "state" TEXT NOT NULL DEFAULT E'',
    "zip" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedBy" TEXT,
    "name" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Landlord" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedBy" TEXT,
    "name" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Landlord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyManagementCompany" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedBy" TEXT,
    "name" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "PropertyManagementCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Business_landlords" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Rating_createdBy_idx" ON "Rating"("createdBy");

-- CreateIndex
CREATE INDEX "Rating_updatedBy_idx" ON "Rating"("updatedBy");

-- CreateIndex
CREATE INDEX "Rating_deletedBy_idx" ON "Rating"("deletedBy");

-- CreateIndex
CREATE INDEX "Rating_address_idx" ON "Rating"("address");

-- CreateIndex
CREATE INDEX "Rating_landlordAtDateOfRating_idx" ON "Rating"("landlordAtDateOfRating");

-- CreateIndex
CREATE INDEX "Rating_doingBusinessAsAtDateOfRating_idx" ON "Rating"("doingBusinessAsAtDateOfRating");

-- CreateIndex
CREATE INDEX "Rating_propertyManagementCompanyAtDateOfRating_idx" ON "Rating"("propertyManagementCompanyAtDateOfRating");

-- CreateIndex
CREATE INDEX "Address_createdBy_idx" ON "Address"("createdBy");

-- CreateIndex
CREATE INDEX "Address_updatedBy_idx" ON "Address"("updatedBy");

-- CreateIndex
CREATE INDEX "Address_deletedBy_idx" ON "Address"("deletedBy");

-- CreateIndex
CREATE INDEX "Business_createdBy_idx" ON "Business"("createdBy");

-- CreateIndex
CREATE INDEX "Business_updatedBy_idx" ON "Business"("updatedBy");

-- CreateIndex
CREATE INDEX "Business_deletedBy_idx" ON "Business"("deletedBy");

-- CreateIndex
CREATE INDEX "Landlord_createdBy_idx" ON "Landlord"("createdBy");

-- CreateIndex
CREATE INDEX "Landlord_updatedBy_idx" ON "Landlord"("updatedBy");

-- CreateIndex
CREATE INDEX "Landlord_deletedBy_idx" ON "Landlord"("deletedBy");

-- CreateIndex
CREATE INDEX "PropertyManagementCompany_createdBy_idx" ON "PropertyManagementCompany"("createdBy");

-- CreateIndex
CREATE INDEX "PropertyManagementCompany_updatedBy_idx" ON "PropertyManagementCompany"("updatedBy");

-- CreateIndex
CREATE INDEX "PropertyManagementCompany_deletedBy_idx" ON "PropertyManagementCompany"("deletedBy");

-- CreateIndex
CREATE UNIQUE INDEX "_Business_landlords_AB_unique" ON "_Business_landlords"("A", "B");

-- CreateIndex
CREATE INDEX "_Business_landlords_B_index" ON "_Business_landlords"("B");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_address_fkey" FOREIGN KEY ("address") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_doingBusinessAsAtDateOfRating_fkey" FOREIGN KEY ("doingBusinessAsAtDateOfRating") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_landlordAtDateOfRating_fkey" FOREIGN KEY ("landlordAtDateOfRating") REFERENCES "Landlord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_propertyManagementCompanyAtDateOfRating_fkey" FOREIGN KEY ("propertyManagementCompanyAtDateOfRating") REFERENCES "PropertyManagementCompany"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Landlord" ADD CONSTRAINT "Landlord_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Landlord" ADD CONSTRAINT "Landlord_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Landlord" ADD CONSTRAINT "Landlord_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyManagementCompany" ADD CONSTRAINT "PropertyManagementCompany_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyManagementCompany" ADD CONSTRAINT "PropertyManagementCompany_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyManagementCompany" ADD CONSTRAINT "PropertyManagementCompany_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Business_landlords" ADD CONSTRAINT "_Business_landlords_A_fkey" FOREIGN KEY ("A") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Business_landlords" ADD CONSTRAINT "_Business_landlords_B_fkey" FOREIGN KEY ("B") REFERENCES "Landlord"("id") ON DELETE CASCADE ON UPDATE CASCADE;
