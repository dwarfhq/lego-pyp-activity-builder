CREATE TABLE `activities` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `builds` (
	`id` integer PRIMARY KEY NOT NULL,
	`activityId` integer NOT NULL,
	`data` text,
	FOREIGN KEY (`activityId`) REFERENCES `activities`(`id`) ON UPDATE no action ON DELETE no action
);
