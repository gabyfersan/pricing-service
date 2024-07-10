import { customers } from "./data";

export function doesCustomerExist(customerId: string): boolean {
  return customerId in customers;
}
