/*
  Warnings:

  - You are about to drop the column `altitud` on the `PostPerdido` table. All the data in the column will be lost.
  - You are about to drop the column `altitud` on the `PostVisto` table. All the data in the column will be lost.
  - Added the required column `longitud` to the `PostPerdido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitud` to the `PostVisto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PostPerdido" DROP COLUMN "altitud",
ADD COLUMN     "longitud" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "PostVisto" DROP COLUMN "altitud",
ADD COLUMN     "longitud" DOUBLE PRECISION NOT NULL;
