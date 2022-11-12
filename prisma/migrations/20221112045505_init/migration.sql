-- CreateEnum
CREATE TYPE "colorPerros" AS ENUM ('Blanco', 'Negro', 'Cafe', 'Gris', 'BiColor', 'TriColor');

-- CreateTable
CREATE TABLE "PostPerdido" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "color" "colorPerros" NOT NULL,
    "detalles" TEXT,
    "raza" TEXT NOT NULL,
    "latitud" DOUBLE PRECISION NOT NULL,
    "altitud" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagen" TEXT NOT NULL,
    "recompensa" BOOLEAN NOT NULL DEFAULT false,
    "edad" INTEGER,
    "casoAbierto" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PostPerdido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostVisto" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "color" "colorPerros" NOT NULL,
    "detallesPerro" TEXT,
    "raza" TEXT NOT NULL,
    "latitud" DOUBLE PRECISION NOT NULL,
    "altitud" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagen" TEXT NOT NULL,
    "rescatado" BOOLEAN NOT NULL,
    "detallesPlaca" TEXT,
    "edad" INTEGER,

    CONSTRAINT "PostVisto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostPerdido" ADD CONSTRAINT "PostPerdido_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostVisto" ADD CONSTRAINT "PostVisto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
