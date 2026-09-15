import "./Login.css";

import { Loginform } from "./forms/login";

import statsMock from "../mock/minichards";
import ViewQuiltTwoToneIcon from "@mui/icons-material/ViewQuiltTwoTone";
export function Login() {
  return (
    <section className="Login-container">
      <div className="Branding">
        <header>
          <ViewQuiltTwoToneIcon />
          <h3>Inventario</h3>
        </header>
        <section className="INFO">
          <span>Sistema de gestion</span>
          <h3>Control total de tu Inventario</h3>
          <p>
            Gestiona productos, órdenes y proveedores desde un solo lugar.
            Rápido, claro y siempre al día.
          </p>
        </section>
        <section className="Minicards-container">
          {statsMock.map((item) => (
            <div className="stat-card" key={item.id}>
              {item.icon}
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>
        <footer>Created by Yader Saenz</footer>
      </div>
      <section className="FORM-container">
        <Loginform />
      </section>
    </section>
  );
}
