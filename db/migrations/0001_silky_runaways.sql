CREATE TABLE `notes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(100) NOT NULL,
	`content` text NOT NULL,
	`folder_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`is_active` integer DEFAULT 1 NOT NULL,
	`date_add` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`delete_at` text DEFAULT 'NULL'
);
--> statement-breakpoint
ALTER TABLE `folders` ALTER COLUMN "name" TO "name" text(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `folders` ALTER COLUMN "user_id" TO "user_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE `folders` ALTER COLUMN "is_active" TO "is_active" integer NOT NULL DEFAULT 1;--> statement-breakpoint
ALTER TABLE `folders` ALTER COLUMN "date_add" TO "date_add" text NOT NULL DEFAULT 'CURRENT_TIMESTAMP';