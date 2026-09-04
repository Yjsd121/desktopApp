import { BrowserRouter, Routes, Route } from "react-router-dom";

import { InevntoryView } from "./Inventory/Inventory";
import { Login } from "./Login/Login";
import { OrderView } from "./Orders/Orders";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inventory" element={<InevntoryView />} />
        <Route path="/Orders" element={<OrderView />} />
      </Routes>
    </BrowserRouter>
  );
}
