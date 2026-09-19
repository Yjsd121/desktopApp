import "./Inventory.css";

import { Barnav } from "../Components/Barnav/Barnav";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { getStatus } from "./utilities/getStatus";
import { productColumns } from "../static/ProductsHeader";
import { Table } from "../Components/table/Table";
import { SearchFilter } from "../Components/SearchFilter/SearchFilter";
import { APIURL } from "../API/apis";
import { useEffect, useState } from "react";

interface Producttype {
  id: number;
  sku: string;
  name: string;
  category: string;
  status: string;
  stock: number;
  price: number;
  supplier: string;
  description: string;
  image: string;
}

export function InevntoryView() {
  const token = window.localStorage.getItem("token");
  const [Product, setProduct] = useState<Producttype[]>([]);
  async function handlegetInventory() {
    const response = await fetch(`${APIURL}/Inventory`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data.Allproducts;
  }

  useEffect(() => {
    async function getProducts() {
      const data = await handlegetInventory();
      if (!data) {
        return;
      }
      setProduct(data);
    }

    getProducts();
  }, []);
  return (
    <>
      <Barnav />
      <section className="Iventory-container">
        <SearchFilter />
        <Table Header={productColumns}>
          {Product.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.sku}</td>
              <td>{item.category}</td>
              <td>$ {item.price}</td>
              <td style={{ color: getStatus(item.stock).color }}>
                {item.stock}
              </td>
              <td>{item.supplier}</td>
              <td>
                <div className={getStatus(item.stock).class}>
                  {getStatus(item.stock).class}
                </div>
              </td>
              <td className="actions">
                <button>
                  <EditOutlinedIcon />
                </button>
                <button>
                  <DeleteOutlinedIcon />
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </section>
    </>
  );
}
