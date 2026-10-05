import { useEffect } from "react";
import "./App.css";
import { Router } from "./Router";

export function App() {
  useEffect(() => {
    window.api.ping().then((response) => {
      console.log("Electron:", response);
    });
  }, []);

  return (
    <>
      <Router />
    </>
  );
}
