import moment from "moment";

import type { PriceCalculationRequest } from "../types/types";

export const isWorkingDay = (date: string) => {
  const day = moment(date).day();
  return day !== 0 && day !== 6; // Sunday = 0, Saturday = 6
};

export function validateInputs(request: PriceCalculationRequest) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const customerIdRegex = / ^[a-z]$/;

  const { customerId, startDate, endDate } = request;

  if (!customerId || !startDate || !endDate) {
    return false;
  }

  if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
    return false;
  }
  
  if (!customerIdRegex.test(customerId)) {
    return false;
  }
  return true;
}
