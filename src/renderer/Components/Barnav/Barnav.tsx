import "./Barnav.css";

import ViewQuiltTwoToneIcon from "@mui/icons-material/ViewQuiltTwoTone";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import type { InfoUser } from "../../Types/type";

export function Barnav() {
  const navigate = useNavigate();
  const User = window.localStorage.getItem("user");
  const InfoUser: InfoUser = User ? JSON.parse(User) : null;

  function handleLogout() {
    window.localStorage.clear();
    navigate("/");
  }
  return (
    <section className="Barnav-container">
      <div className="Logo-container">
        <div className="Logo">
          <ViewQuiltTwoToneIcon />
          <h3>Inventario</h3>
        </div>
        <div className="Nav">
          <NavLink to="/Inventory">
            <HexagonOutlinedIcon /> Inventario
          </NavLink>
          <NavLink to="/Orders">
            <BeenhereOutlinedIcon />
            Ordernes
          </NavLink>
          <NavLink to="/Suppliers">
            <BeenhereOutlinedIcon />
            Suppliers
          </NavLink>
        </div>
      </div>
      <div className="User-container">
        <div className="Info-user">
          <p>{InfoUser.username}</p>
          <p>{InfoUser.role}</p>
        </div>
        <img src="./UserDefault.png" />
        <button className="logoutButtonclick" onClick={handleLogout}>
          <LoginOutlinedIcon className="Logoutbutton" />
        </button>
      </div>
    </section>
  );
}
