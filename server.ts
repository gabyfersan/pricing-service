import { serve } from "bun";
import { doesCustomerExist } from "./customer.ts";
import { calculatePrice } from "./pricing.js";
import type { PriceCalculationRequest } from "./types/types.ts";
import { validateInputs } from "./utils/utils.ts";

serve({
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/calculate-price" && req.method === "GET") {
      const customerId = url.searchParams.get("customerId") ?? "";
      const startDate = url.searchParams.get("startDate") ?? "";
      const endDate = url.searchParams.get("endDate") ?? "";

      const request: PriceCalculationRequest = {
        customerId,
        startDate,
        endDate,
      };

      if (!validateInputs(request)) {
        return new Response(JSON.stringify({ error: "Invalid input" }), {
          status: 400,
        });
      }

      if (!doesCustomerExist(customerId)) {
        return new Response(JSON.stringify({ error: "Customer Not Found" }), {
          status: 404,
        });
      }

      try {
        const price = await calculatePrice(request);
        return new Response(JSON.stringify({ price }), { status: 200 });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      }
    }
    return new Response("Not Found", { status: 404 });
  },
  port: 3000,
});

console.log(`PricingService listening at http://localhost:3000`);
