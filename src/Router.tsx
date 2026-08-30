import { BrowserRouter, Routes, Route } from "react-router-dom";

import { InevntoryView } from "./Inventory/Inventory";
import { Login } from "./Login/Login";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inventory" element={<InevntoryView />} />
      </Routes>
    </BrowserRouter>
  );
}
