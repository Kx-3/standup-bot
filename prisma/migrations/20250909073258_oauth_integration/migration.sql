/*
  Warnings:

  - Added the required column `botToken` to the `Workspace` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Workspace" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slackTeamId" TEXT NOT NULL,
    "name" TEXT,
    "timezone" TEXT NOT NULL DEFAULT 'Africa/Nairobi',
    "channelId" TEXT,
    "botToken" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Workspace" ("channelId", "createdAt", "id", "name", "slackTeamId", "timezone") SELECT "channelId", "createdAt", "id", "name", "slackTeamId", "timezone" FROM "Workspace";
DROP TABLE "Workspace";
ALTER TABLE "new_Workspace" RENAME TO "Workspace";
CREATE UNIQUE INDEX "Workspace_slackTeamId_key" ON "Workspace"("slackTeamId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
