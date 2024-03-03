/*
  Warnings:

  - The primary key for the `Issue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Notification` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_issue_id_fkey";

-- AlterTable
ALTER TABLE "College_admin" ALTER COLUMN "phone_number" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Hostel_admin" ALTER COLUMN "phone_number" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_pkey",
ALTER COLUMN "issue_id" SET DATA TYPE BIGSERIAL,
ADD CONSTRAINT "Issue_pkey" PRIMARY KEY ("issue_id");

-- AlterTable
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_pkey",
ALTER COLUMN "issue_id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Notification_pkey" PRIMARY KEY ("issue_id", "student_id");

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "phone_number" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Technician" ALTER COLUMN "phone_number" SET DATA TYPE BIGINT;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_issue_id_fkey" FOREIGN KEY ("issue_id") REFERENCES "Issue"("issue_id") ON DELETE CASCADE ON UPDATE CASCADE;
