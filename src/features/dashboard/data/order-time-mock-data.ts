import type { OrderTimeData } from "../types/order-time.types";

export const Order_Time_Mock_Data: OrderTimeData[] = [
  {
    timeOfTheDay: "Afternoon",
    percentage: 40,
    orders: 1890,
    color: "#4F46E5",
    timeRange: "1 - 4pm",
  },
  {
    timeOfTheDay: "Evening",
    percentage: 32,
    orders: 1512,
    color: "#818CF8",
    timeRange: "4 - 11pm",
  },
  {
    timeOfTheDay: "Morning",
    percentage: 28,
    orders: 1323,
    color: "#C7D2FE",
    timeRange: "12 - 11am",
  },
];