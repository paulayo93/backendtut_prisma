/*
  Warnings:

  - You are about to drop the column `acitve` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "acitve",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;
