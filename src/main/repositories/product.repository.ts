import { drizzle } from "drizzle-orm/libsql";
import { ProductTable } from "../../db/schema";
// import { eq } from "drizzle-orm";

const db = drizzle(process.env.DB_FILE_NAME ?? "file:./local.db");

export async function CreateProduct() {
  try {
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
  } catch (err) {
    console.log("Error Creating product", err);
  }
}
