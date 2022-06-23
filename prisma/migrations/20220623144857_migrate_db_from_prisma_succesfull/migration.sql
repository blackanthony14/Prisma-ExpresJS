-- CreateTable
CREATE TABLE "estudiante" (
    "primer_nombre" VARCHAR(100) NOT NULL,
    "primer_apellido" VARCHAR(100) NOT NULL,
    "edad" INTEGER NOT NULL,
    "pais_origen" VARCHAR(50) NOT NULL,
    "carrera" VARCHAR(100) NOT NULL,
    "materias_cursadas" VARCHAR(200) NOT NULL,
    "es_moroso" VARCHAR(50) NOT NULL,
    "deuda_ciclo_actual" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materia" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(200) NOT NULL,
    "codigo" VARCHAR(10) NOT NULL,
    "profesor" VARCHAR(200) NOT NULL,
    "iniciales_profesor" VARCHAR(4) NOT NULL,
    "creditos" INTEGER NOT NULL,
    "carrera" VARCHAR(100) NOT NULL,

    CONSTRAINT "materia_pkey" PRIMARY KEY ("id")
);
