import type { ReactNode } from "react";
import "./Modal.css";

interface Modalprop {
  children: ReactNode;
}
export function Modal({ children }: Modalprop) {
  return (
    <section className="Modal-overlay">
      <div className="Modal-container">{children}</div>
    </section>
  );
}
