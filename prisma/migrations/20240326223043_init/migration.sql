-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "long_url" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
