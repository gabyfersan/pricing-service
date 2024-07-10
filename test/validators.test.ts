import type { PriceCalculationRequest } from "../types/types";
import { isWorkingDay, validateInputs } from "../utils/utils";

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

describe("isWorkingDay function", () => {
  it("should return true for Monday", () => {
    const monday = "2023-07-10"; // A Monday
    expect(isWorkingDay(monday)).toBe(true);
  });

  it("should return true for Friday", () => {
    const friday = "2023-07-14"; // A Friday
    expect(isWorkingDay(friday)).toBe(true);
  });

  it("should return false for Sunday", () => {
    const sunday = "2023-07-09"; // A Sunday
    expect(isWorkingDay(sunday)).toBe(false);
  });

  it("should return false for Saturday", () => {
    const saturday = "2023-07-15"; // A Saturday
    expect(isWorkingDay(saturday)).toBe(false);
  });

  //   it("should return false for invalid date format", () => {
  //     const invalidDate = "2023-07-XX"; // Invalid date format
  //     expect(isWorkingDay(invalidDate)).toBe(false);
  //   });

  // Add more test cases as needed
});
