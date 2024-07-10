import type { PriceCalculationRequest } from "../types/types";
import { validateInputs } from "../utils/utils";

describe("validateInputs", () => {
  it("should return false for customerId with length 1 lowercase", () => {
    const request: PriceCalculationRequest = {
      customerId: "a",
      startDate: "2023-01-01",
      endDate: "2023-01-31",
    };

    expect(validateInputs(request)).toBe(false);
  });

  it("should return false for invalid customerId ", () => {
    const request: PriceCalculationRequest = {
      customerId: "123",
      startDate: "2023-01-01",
      endDate: "2023-01-31",
    };

    expect(validateInputs(request)).toBe(false);
  });

  it("should return false for invalid date format", () => {
    const request: PriceCalculationRequest = {
      customerId: "a",
      startDate: "01-01-2023",
      endDate: "31-01-2023",
    };

    expect(validateInputs(request)).toBe(false);
  });

  it("should return false for empty customerId", () => {
    const request: PriceCalculationRequest = {
      customerId: "",
      startDate: "2023-01-01",
      endDate: "2023-01-31",
    };

    expect(validateInputs(request)).toBe(false);
  });
});
