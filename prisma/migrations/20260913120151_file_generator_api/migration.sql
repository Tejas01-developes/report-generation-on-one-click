-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "rollNo" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "english" INTEGER NOT NULL DEFAULT 0,
    "maths" INTEGER NOT NULL DEFAULT 0,
    "hindi" INTEGER NOT NULL DEFAULT 0,
    "gujarati" INTEGER NOT NULL DEFAULT 0,
    "computer" INTEGER NOT NULL DEFAULT 0,
    "ss" INTEGER NOT NULL DEFAULT 0,
    "science" INTEGER NOT NULL DEFAULT 0,
    "totalMarks" INTEGER,
    "grade" TEXT,
    "isPass" BOOLEAN,
    "fileUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_rollNo_key" ON "students"("rollNo");
