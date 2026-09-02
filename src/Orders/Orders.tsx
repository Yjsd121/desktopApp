import "./Orders.css";
import { Barnav } from "../Components/Barnav/Barnav";
import { SearchFilter } from "../Components/SearchFilter/SearchFilter";

export function OrderView() {
  return (
    <>
      <Barnav />
      <SearchFilter />
      <section className="Orders-container">
        <section className="Formulario">Forluario</section>
        <section className="OrederView">Orders</section>
      </section>
    </>
  );
}
