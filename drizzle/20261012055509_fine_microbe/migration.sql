PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`username` text NOT NULL,
	`user_id` text NOT NULL UNIQUE,
	`email` text NOT NULL UNIQUE,
	`userpass` text NOT NULL,
	`role` text NOT NULL,
	`createat` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_users_table`(`id`, `username`, `user_id`, `email`, `userpass`, `role`, `createat`) SELECT `id`, `username`, `user_id`, `email`, `userpass`, `role`, `createat` FROM `users_table`;--> statement-breakpoint
DROP TABLE `users_table`;--> statement-breakpoint
ALTER TABLE `__new_users_table` RENAME TO `users_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;