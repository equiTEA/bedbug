/*
  Warnings:

  - Changed the type of `rentPriceAtTimeOfRating` on the `Rating` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "rentPriceAtTimeOfRating",
ADD COLUMN     "rentPriceAtTimeOfRating" INTEGER NOT NULL;
