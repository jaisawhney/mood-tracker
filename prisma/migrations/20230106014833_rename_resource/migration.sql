/*
  Warnings:

  - You are about to drop the `Day` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Day` DROP FOREIGN KEY `Day_userId_fkey`;

-- DropTable
DROP TABLE `Day`;

-- CreateTable
CREATE TABLE `Entry` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `mood` ENUM('GREAT', 'GOOD', 'NEUTRAL', 'BAD', 'SAD') NOT NULL,
    `note` VARCHAR(250) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Entry` ADD CONSTRAINT `Entry_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
