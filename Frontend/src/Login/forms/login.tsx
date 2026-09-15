import type React from "react";
import { useState } from "react";

export function Loginform() {
  const [formData, setformData] = useState({
    email: "",
    pass: "",
  });
  async function handlesubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const response  = fetch(``)
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
          id="pass"
          name="pass"
          value={formData.email}
          onChange={handlechange}
          type="text"
          placeholder="example@company.com"
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input type="password" placeholder="*********" />
      </div>
      <button>Login</button>
    </form>
  );
}
