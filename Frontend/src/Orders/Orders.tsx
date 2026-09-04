import "./Orders.css";
import { Barnav } from "../Components/Barnav/Barnav";
import { SearchFilter } from "../Components/SearchFilter/SearchFilter";
import { Orders } from "../mock/Orders-mock";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";

export function OrderView() {
  const [exppanded, setexpanded] = useState("");
  return (
    <>
      <Barnav />
      <section className="Orders-container">
        <section className="FormSide">
          <form>
            <div className="FormHeader">
              <div className="Line Vertical" />
              <h3>Nueva Orden</h3>
            </div>
            <div className="FormInput-container">
              <div className="Input-container">
                <label>Client</label>
                <input />
              </div>
              <div className="Input-container">
                <label>Email</label>
                <input />
              </div>
              <div className="Input-container">
                <label>Products</label>
                <select>
                  <option>Seleccionar Producto</option>
                </select>
              </div>

              <div className="Input-container">
                <label>Cantidad</label>
                <input type="number" />
              </div>
              <div className="Input-container">
                <label>Direction</label>
                <input />
              </div>

              <div className="Input-container">
                <label>Notas</label>
                <input />
              </div>
              <button>Create Order</button>
            </div>
          </form>
        </section>
        <section className="OrderSide">
          <SearchFilter />
          <div className="Cards-container">
            {Orders.map((item) => (
              <section className="Overflow">
                <button
                  className={exppanded === item.id ? "expanded" : "button"}
                  onClick={() => {
                    if (exppanded === item.id) {
                      setexpanded("");
                    } else {
                      setexpanded(item.id);
                    }
                  }}
                >
                  <ArrowForwardIosOutlinedIcon />
                  <span>{item.id}</span>
                  <span>{item.customer}</span>
                  <span>{item.product}</span>
                  <div>
                    <span>{item.date}</span>
                    <span>{item.total}</span>
                    <span>{item.status}</span>
                  </div>
                </button>

                {exppanded === item.id && (
                  <div className="ExpandedCard">
                    <div className="ExpandedCard-Info-container">
                      <div className="ExpandedCard-Info">
                        <label>Customer</label>
                        <span>{item.customer}</span>
                        <span>{item.email}</span>
                        <label>Notas</label>
                        <span>{item.notes}</span>
                      </div>
                      <div className="ExpandedCard-Info">
                        <label>Product</label>
                        <span>{item.product}</span>
                        <span>{item.quantity}</span>
                      </div>
                      <div className="ExpandedCard-Info">
                        <label>Direction</label>
                        <span>{item.address}</span>
                      </div>
                    </div>
                    <div className="ExpandedCard-button">
                      <div>
                        <label>Change Status:</label>
                        <button>Sending</button>
                        <button>Sending</button>
                        <button>Sending</button>
                        <button>Sending</button>
                        <button>Sending</button>
                      </div>
                      <button>Delete</button>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
