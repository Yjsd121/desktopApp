import "./Login.css";

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
          <strong>Control total de tu Inventario</strong>
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
        <div className="header">
          <h3>Bienvenido</h3>
          <p>Inicia sesión para continuar</p>
        </div>
        <form className="Form">
          <div className="input-container">
            <label>User</label>
            <input />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input />
          </div>
          <button>
            <p>
              <strong>login</strong>
            </p>
          </button>
        </form>
      </section>
    </section>
  );
}
