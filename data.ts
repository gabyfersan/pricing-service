import type {Customers} from "./types/types"
export const customers : Customers= {
  x: {
    services: {
      A: { startDate: "2019-09-20", price: 0.2 },
      C: {
        startDate: "2019-09-20",
        price: 0.4,
        discounts: [{ start: "2019-09-22", end: "2019-09-24", discount: 0.2 }],
      },
    },
    freeDays: 0,
  },
  y: {
    services: {
      B: { startDate: "2018-01-01", price: 0.24 },
      C: { startDate: "2018-01-01", price: 0.4, discount: 0.3 },
    },
    freeDays: 200,
  },
};

export const basePrices = {
  A: 0.2,
  B: 0.24,
  C: 0.4,
};
