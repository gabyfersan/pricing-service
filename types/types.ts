export interface PriceCalculationRequest {
  customerId: string;
  startDate: string;
  endDate: string;
}

interface Discount {
  start: string;
  end: string;
  discount: number;
}

interface Service {
  startDate: string;
  price: number;
  discounts?: Discount[];
  discount?: number;
}

interface Customer {
  services: {
    [key: string]: Service;
  };
  freeDays?: number;
}

export interface Customers {
  [key: string]: Customer;
}
