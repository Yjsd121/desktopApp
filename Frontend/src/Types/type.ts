import type { StatusType } from "./consts";

export interface Header {
  key: string;
  label: string;
}

export type ListHeader = Header[];

export type StatusTypes = (typeof StatusType)[keyof typeof StatusType];

export interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  quantity: number;
  address: string;
  notes: string;
  date: string;
  total: number;
  status: StatusTypes;
}

export type ListOrders = Order[];
