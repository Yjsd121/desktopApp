import type React from "react";
import { ProductsFilters } from "../../static/Filters";
import { useState } from "react";
import type { Producttype } from "../../Types/type";
interface FormProp {
  SetOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export function NewProductForm({ SetOpenModal }: FormProp) {
  const [ProductInfo, setProductInfo] = useState<Producttype>({
    sku: "",
    name: "",
    category: "",
    status: "",
    stock: 0,
    price: 0,
    supplier: "",
    description: "",
    image: "",
  });

  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    setProductInfo({
      ...ProductInfo,
      [e.target.name]: e.target.value,
    });
  }

  const Category = ProductsFilters[1];
  return (
    <form className="Form-Style">
      <div className="Form-header">
        <label>New Product</label>
      </div>
      <div className="Form-input-container">
        <label>Name</label>
        <input />
      </div>
      <section>
        <div className="Form-input-container">
          <label>SKU</label>
          <input />
        </div>

        <div className="Form-input-container">
          <label>Category</label>
          <select>
            <option>All</option>
            {Category.options.map((item) => (
              <option key={item.key}>{item.option}</option>
            ))}
          </select>
        </div>
      </section>
      <section>
        <div className="Form-input-container">
          <label>Price (C$)</label>
          <input />
        </div>
        <div className="Form-input-container">
          <label>Stock</label>
          <input />
        </div>
      </section>
      <div className="Form-input-container">
        <label>Proveedor</label>
        <input />
      </div>
      <div className="Form-input-container">
        <label>Description</label>
        <textarea />
      </div>
      <div className="Form-actions">
        <button
          type="button"
          onClick={() => {
            SetOpenModal(false);
          }}
        >
          Cancelar
        </button>
        <button type="submit">Crear Producto</button>
      </div>
    </form>
  );
}
