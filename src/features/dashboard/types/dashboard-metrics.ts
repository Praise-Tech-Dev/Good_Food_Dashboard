import type { MostOrderedFood } from "./most-ordered-food.types";
import type { OrderTimeData } from "./order-time.types";
import type { OrderTrendData } from "./order-trend.types";
import type { RatingData } from "./rating-types";
import type { RevenueData } from "./revenue.types";

export interface DashboardMetrics {
  revenue: RevenueData[];
  orderTime: OrderTimeData[];
  rating: RatingData[];
  mostOrderedFood: MostOrderedFood[];
  orderTrends: OrderTrendData[];
}
