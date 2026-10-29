import "./Inventory.css";
import { useEffect, useState } from "react";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { getStatus } from "./utilities/getStatus";
import { getProducts } from "./utilities/request";

import { Barnav } from "../Components/Barnav/Barnav";
import { Table } from "../Components/table/Table";
import { SearchFilter } from "../Components/SearchFilter/SearchFilter";

import { productColumns } from "../static/TableHeaders";
import { ProductsFilters } from "../static/Filters.ts";
import { Modal } from "../Components/Modal/Modal";
import { NewProductForm } from "./forms/NewproductForm.tsx";
import type { Appresponse } from "../Types/response.type.ts";
import type { ListProcuts } from "../Types/type";

export function InevntoryView() {
  const token = window.localStorage.getItem("token");
  const [Product, setProduct] = useState<ListProcuts>([]);
  const [OpenModal, setOPenModal] = useState(false);

  async function handlegetInventory() {
    if (!token) {
      return;
    }
    const Data: Appresponse<ListProcuts> = await getProducts(token);
    return Data.data;
  }

  useEffect(() => {
    async function getProducts() {
      const response = await handlegetInventory();

      if (response == undefined) {
        return;
      }

      setProduct(response);
    }

    getProducts();
  }, []);

  return (
    <>
      <Barnav />
      <section className="Inventory-container">
        <SearchFilter filters={ProductsFilters} setOpenModal={setOPenModal} />
        <Table Header={productColumns}>
          {Product.map((item) => (
            <tr key={item.sku}>
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
                <button
                  onClick={() => {
                    setOPenModal(true);
                  }}
                >
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
      {OpenModal && (
        <Modal>
          <NewProductForm SetOpenModal={setOPenModal} />
        </Modal>
      )}
    </>
  );
}
