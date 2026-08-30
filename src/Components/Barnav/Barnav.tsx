import "./Barnav.css";

import ViewQuiltTwoToneIcon from "@mui/icons-material/ViewQuiltTwoTone";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";

export function Barnav() {
  return (
    <section className="Barnav-container">
      <div className="Logo-container">
        <div className="Logo">
          <ViewQuiltTwoToneIcon />
          <h3>Inventario</h3>
        </div>
        <div className="Nav">
          <a>
            <HexagonOutlinedIcon /> Inventario
          </a>
          <a>
            <BeenhereOutlinedIcon />
            Ordernes
          </a>
        </div>
      </div>

      <div className="User-container">
        <div className="Info-user">
          <p>Name</p>
          <p>position held</p>
        </div>
        <img src="./UserDefault.png" />
      </div>
    </section>
  );
}
