import "./Orders.css";
import { Barnav } from "../Components/Barnav/Barnav";
import { SearchFilter } from "../Components/SearchFilter/SearchFilter";
import { Orders } from "../mock/Orders-mock";

export function OrderView() {
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
              <button>
                <span>{item.id}</span>
                <span>{item.customer}</span>
                <span>{item.product}</span>
                <div>
                  <span>{item.date}</span>
                  <span>{item.total}</span>
                  <span>{item.status}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
