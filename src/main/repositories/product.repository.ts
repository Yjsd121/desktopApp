import { drizzle } from "drizzle-orm/libsql";
<<<<<<< HEAD
import { ProductTable } from "../../db/schema";
// import { eq } from "drizzle-orm";
=======
import { usersTable } from "../../db/schema";
import { eq } from "drizzle-orm";
>>>>>>> origin/main

const db = drizzle(process.env.DB_FILE_NAME ?? "file:./local.db");

export async function CreateProduct() {
  try {
<<<<<<< HEAD
    const allProducts = await db
      .select({
        sku: ProductTable.sku,
        name: ProductTable.name,
        category: ProductTable.category,
        status: ProductTable.status,
        stock: ProductTable.stock,
        price: ProductTable.price,
        supplier: ProductTable.supplier,
        description: ProductTable.description,
        image: ProductTable.image,
      })
      .from(ProductTable);
    console.log(allProducts);
=======
>>>>>>> origin/main
  } catch (err) {
    console.log("Error Creating product", err);
  }
}
