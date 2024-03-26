/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "long_url" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);
