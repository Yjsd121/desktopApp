CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`username` text NOT NULL,
	`user_id` integer NOT NULL UNIQUE,
	`email` text NOT NULL UNIQUE,
	`userpass` text NOT NULL,
	`role` text NOT NULL,
	`createat` text NOT NULL
);
