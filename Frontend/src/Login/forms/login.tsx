import type React from "react";
import { useState } from "react";
import { handleInfoUser, HandleLogin } from "../utils/login";
import type { InfoUser } from "../../Types/type";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide";
import { MorphIcon } from "morphicons/react";

interface loginSucess {
  ok: boolean;
  token: string;
}

export function Loginform() {
  const [formData, setformData] = useState({
    emailbody: "",
    pass: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  async function handlesubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const response = await HandleLogin(formData.emailbody, formData.pass);

    const data: loginSucess = await response.json();

    if (data.token) {
      const InfoUser: InfoUser = await handleInfoUser(data.token);
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          name: InfoUser.username,
          email: InfoUser.email,
        }),
      );
      if (data.token && InfoUser) {
        navigate("/Inventory");
      }
    }
  }
  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form className="Form" onSubmit={handlesubmit}>
      <div>
        <h3>Bienvenido</h3>
        <p>Inicia sesión para continuar</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>User</label>
        <div className="input-container">
          <input
            id="emailbody"
            name="emailbody"
            value={formData.emailbody}
            onChange={handlechange}
            type="text"
            placeholder="example@company.com"
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>Password</label>
        <div className="input-container">
          <input
            id="pass"
            name="pass"
            value={formData.pass}
            onChange={handlechange}
            type={showPassword ? "text" : "password"}
            placeholder="*********"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            <MorphIcon icon={showPassword ? Eye : EyeOff} />
          </button>
        </div>
      </div>

      <button className="loginbutton">Login</button>
    </form>
  );
}
