// pricing.js

import moment from "moment";
import { customers } from "./data.ts";
import type { PriceCalculationRequest } from "./types/types.ts";
import { isWorkingDay } from "./utils/utils.ts";


export const calculatePrice = (request: PriceCalculationRequest) => {
  const { customerId, startDate, endDate } = request;
  const customer = customers[customerId];
  if (!customer) throw new Error("Customer not found");

  let totalPrice = 0;
  let freeDays = customer.freeDays;

  for (const [serviceId, service] of Object.entries(customer.services)) {
    let currentDate = moment(startDate);
    const end = moment(endDate);
    while (currentDate <= end) {
      const isServiceWorkingDay =
        serviceId === "C" || isWorkingDay(currentDate);
      if (isServiceWorkingDay) {
        if (freeDays > 0) {
          freeDays--;
        } else {
          let price = service.price;
          if (service.discounts) {
            service.discounts.forEach((discount) => {
              const discountStart = moment(discount.start);
              const discountEnd = moment(discount.end);
              if (currentDate >= discountStart && currentDate <= discountEnd) {
                price *= 1 - discount.discount;
              }
            });
          } else if (service.discount) {
            price *= 1 - service.discount;
          }
          totalPrice += price;
        }
      }
      currentDate.add(1, "days");
    }
  }

  return totalPrice;
};
