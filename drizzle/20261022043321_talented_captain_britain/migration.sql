CREATE TABLE `ProductTable` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`sku` text NOT NULL UNIQUE,
	`name` text NOT NULL,
	`category` text NOT NULL,
	`status` text NOT NULL,
	`stock` integer NOT NULL,
	`price` float NOT NULL,
	`supplier` text NOT NULL,
	`description` text NOT NULL,
	`image` text NOT NULL
);
