import "./Inventory.css";

import { Barnav } from "../Components/Barnav/Barnav";
import { Products } from "../mock/Products-table";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { getStatus } from "./utilities/getStatus";
import { productColumns } from "../static/ProductsHeader";
import { Table } from "../Components/table/Table";
import { SearchFilter } from "../Components/SearchFilter/SearchFilter";

export function InevntoryView() {
  return (
    <>
      <Barnav />
      <SearchFilter />
      <Table Header={productColumns}>
        {Products.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.sku}</td>
            <td>{item.category}</td>
            <td>$ {item.price}</td>
            <td style={{ color: getStatus(item.stock).color }}>{item.stock}</td>
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
    </>
  );
}
