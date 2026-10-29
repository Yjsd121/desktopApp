import { drizzle } from "drizzle-orm/libsql";
import { ProductTable } from "../../db/schema";
import type { Producttype } from "../../renderer/Types/type";

const db = drizzle(process.env.DB_FILE_NAME ?? "file:./local.db");

export async function GetallProducts() {
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

    if (!allProducts) {
      return {
        success: false,
        message: "Data not found",
      };
    }
    return allProducts;
  } catch (err) {
    console.log("Error reading products", err);
  }
}

export async function CreateP(Product: Producttype) {
  try {
    await db.insert(ProductTable).values({
      sku: Product.sku,
      name: Product.name,
      category: Product.category,
      status: Product.status,
      stock: Product.stock,
      price: Product.price,
      supplier: Product.supplier,
      description: Product.description,
      image: Product.image,
    });
  } catch (err) {
    console.log("Error Creating product");
  }
}
