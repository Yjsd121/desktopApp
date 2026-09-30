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

export interface InfoUser {
  username: string;
  email: string;
  role: string;
}
export interface loginSucess {
  ok: boolean;
  token: string;
}

export interface Producttype {
  id: number;
  sku: string;
  name: string;
  category: string;
  status: string;
  stock: number;
  price: number;
  supplier: string;
  description: string;
  image: string;
}
export interface FilterOption {
  key: string;
  option: string;
}
export interface Filter {
  name: string;
  options: FilterOption[];
}

export type ListFilters = Filter[];
