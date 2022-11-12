/*
  Warnings:

  - The `color` column on the `PostPerdido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `color` column on the `PostVisto` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "PostPerdido" DROP COLUMN "color",
ADD COLUMN     "color" TEXT;

-- AlterTable
ALTER TABLE "PostVisto" DROP COLUMN "color",
ADD COLUMN     "color" TEXT;
