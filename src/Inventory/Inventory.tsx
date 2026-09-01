import "./Inventory.css";

import { Barnav } from "../Components/Barnav/Barnav";
import { Products } from "../mock/Products-table";

export function InevntoryView() {
  return (
    <>
      <Barnav />
      <section className="SearchFilters-container">
        <input />
        <div className="filters-Side">
          <select>
            <option>Select</option>
            <option>Select</option>
            <option>Select</option>
          </select>
          <select>
            <option>select2</option>
          </select>
          <button>+ Nuevo producto </button>
        </div>
      </section>
      <section className="Inventory-Table">
        <table className="Products-Table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.sku}</td>
                <td>{item.category}</td>
                <td>$ {item.price}</td>
                <td>{item.stock}</td>
                <td>{item.supplier}</td>
                <td>{item.status}</td>
                <td className="actions">
                  <button>delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
