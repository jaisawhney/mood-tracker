/*
  Warnings:

  - The values [HAPPY,SMILE,FROWN,ANGRY] on the enum `Day_mood` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Day` MODIFY `mood` ENUM('GREAT', 'GOOD', 'NEUTRAL', 'BAD', 'SAD') NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `password` VARCHAR(191) NULL;
