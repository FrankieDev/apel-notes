CREATE TABLE `folders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(100),
	`user_id` integer,
	`is_active` integer,
	`date_add` text
);
