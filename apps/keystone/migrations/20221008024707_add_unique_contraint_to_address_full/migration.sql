/*
  Warnings:

  - A unique constraint covering the columns `[full]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Address_full_key" ON "Address"("full");
