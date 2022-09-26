-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',

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
    "sentiment" INTEGER,
    "body" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "full" TEXT NOT NULL DEFAULT E'',
    "line1" TEXT NOT NULL DEFAULT E'',
    "line2" TEXT NOT NULL DEFAULT E'',
    "line3" TEXT NOT NULL DEFAULT E'',
    "city" TEXT NOT NULL DEFAULT E'',
    "state" TEXT NOT NULL DEFAULT E'',
    "zip" TEXT NOT NULL DEFAULT E'',
    "currentLandlord" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Landlord" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Landlord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyManagementCompany" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "PropertyManagementCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Address_ratings" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Address_previousLandlords" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Address_currentPropertyManagementCompany" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Address_previousPropertyManagementCompanies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Business_landlords" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Landlord_ratings" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PropertyManagementCompany_ratings" (
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
CREATE INDEX "Address_currentLandlord_idx" ON "Address"("currentLandlord");

-- CreateIndex
CREATE UNIQUE INDEX "_Address_ratings_AB_unique" ON "_Address_ratings"("A", "B");

-- CreateIndex
CREATE INDEX "_Address_ratings_B_index" ON "_Address_ratings"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Address_previousLandlords_AB_unique" ON "_Address_previousLandlords"("A", "B");

-- CreateIndex
CREATE INDEX "_Address_previousLandlords_B_index" ON "_Address_previousLandlords"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Address_currentPropertyManagementCompany_AB_unique" ON "_Address_currentPropertyManagementCompany"("A", "B");

-- CreateIndex
CREATE INDEX "_Address_currentPropertyManagementCompany_B_index" ON "_Address_currentPropertyManagementCompany"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Address_previousPropertyManagementCompanies_AB_unique" ON "_Address_previousPropertyManagementCompanies"("A", "B");

-- CreateIndex
CREATE INDEX "_Address_previousPropertyManagementCompanies_B_index" ON "_Address_previousPropertyManagementCompanies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Business_landlords_AB_unique" ON "_Business_landlords"("A", "B");

-- CreateIndex
CREATE INDEX "_Business_landlords_B_index" ON "_Business_landlords"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Landlord_ratings_AB_unique" ON "_Landlord_ratings"("A", "B");

-- CreateIndex
CREATE INDEX "_Landlord_ratings_B_index" ON "_Landlord_ratings"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PropertyManagementCompany_ratings_AB_unique" ON "_PropertyManagementCompany_ratings"("A", "B");

-- CreateIndex
CREATE INDEX "_PropertyManagementCompany_ratings_B_index" ON "_PropertyManagementCompany_ratings"("B");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_currentLandlord_fkey" FOREIGN KEY ("currentLandlord") REFERENCES "Landlord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Address_ratings" ADD CONSTRAINT "_Address_ratings_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Address_ratings" ADD CONSTRAINT "_Address_ratings_B_fkey" FOREIGN KEY ("B") REFERENCES "Rating"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Address_previousLandlords" ADD CONSTRAINT "_Address_previousLandlords_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Address_previousLandlords" ADD CONSTRAINT "_Address_previousLandlords_B_fkey" FOREIGN KEY ("B") REFERENCES "Landlord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Address_currentPropertyManagementCompany" ADD CONSTRAINT "_Address_currentPropertyManagementCompany_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Address_currentPropertyManagementCompany" ADD CONSTRAINT "_Address_currentPropertyManagementCompany_B_fkey" FOREIGN KEY ("B") REFERENCES "PropertyManagementCompany"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Address_previousPropertyManagementCompanies" ADD CONSTRAINT "_Address_previousPropertyManagementCompanies_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Address_previousPropertyManagementCompanies" ADD CONSTRAINT "_Address_previousPropertyManagementCompanies_B_fkey" FOREIGN KEY ("B") REFERENCES "PropertyManagementCompany"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Business_landlords" ADD CONSTRAINT "_Business_landlords_A_fkey" FOREIGN KEY ("A") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Business_landlords" ADD CONSTRAINT "_Business_landlords_B_fkey" FOREIGN KEY ("B") REFERENCES "Landlord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Landlord_ratings" ADD CONSTRAINT "_Landlord_ratings_A_fkey" FOREIGN KEY ("A") REFERENCES "Landlord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Landlord_ratings" ADD CONSTRAINT "_Landlord_ratings_B_fkey" FOREIGN KEY ("B") REFERENCES "Rating"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PropertyManagementCompany_ratings" ADD CONSTRAINT "_PropertyManagementCompany_ratings_A_fkey" FOREIGN KEY ("A") REFERENCES "PropertyManagementCompany"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PropertyManagementCompany_ratings" ADD CONSTRAINT "_PropertyManagementCompany_ratings_B_fkey" FOREIGN KEY ("B") REFERENCES "Rating"("id") ON DELETE CASCADE ON UPDATE CASCADE;
