import type React from "react";
import { useState } from "react";
import { handleInfoUser, HandleLogin } from "../utils/login";
import type { InfoUser } from "../../Types/type";
import { useNavigate } from "react-router-dom";


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
      <div className="input-container">
        <label>User</label>
        <input
          id="emailbody"
          name="emailbody"
          value={formData.emailbody}
          onChange={handlechange}
          type="text"
          placeholder="example@company.com"
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          id="pass"
          name="pass"
          value={formData.pass}
          onChange={handlechange}
          type="text"
          placeholder="*********"
        />
      </div>
      <button>Login</button>
    </form>
  );
}
