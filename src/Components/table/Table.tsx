import type { ReactNode } from "react";
import type { ListHeader } from "../../type";

interface TableProps {
  Header: ListHeader;
  children: ReactNode;
}

export function Table(Props: TableProps) {
  return (
    <section className="Inventory-Table">
      <table className="Products-Table">
        <thead>
          <tr>
            {Props.Header.map((item) => (
              <th key={item.key}>{item.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>{Props.children}</tbody>
      </table>
    </section>
  );
}
