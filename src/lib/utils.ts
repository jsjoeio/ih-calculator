import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface SalesParams {
  targetAmountInUSD: number;
  totalTimeInMonths: number;
  perSaleAmountInUSD: number;
}

interface SalesResult {
  totalSalesNeeded: number;
  salesPerMonthNeeded: number;
}

export function calculateSales(params: SalesParams): SalesResult {
  const { targetAmountInUSD, totalTimeInMonths, perSaleAmountInUSD } = params;

  const totalSalesNeeded = targetAmountInUSD / perSaleAmountInUSD;

  // Calculate sales per month
  const salesPerMonthNeeded = Math.round(totalSalesNeeded / totalTimeInMonths);

  return {
    totalSalesNeeded,
    salesPerMonthNeeded,
  };
}
