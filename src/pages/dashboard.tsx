
import { MostOrderedSection } from "../features/dashboard/components/most-ordered/most-ordered-section";
import { OrderTimePieChart } from "../features/dashboard/components/order-time/order-time-pie-chart";
import { OrderLineChart } from "../features/dashboard/components/order-trend/order-trend";
import { RatingBubbles } from "../features/dashboard/components/rating-bubbles";
import { RevenueBarChat } from "../features/dashboard/components/revenue/revenue-bar-chart";
import { Order_Time_Mock_Data } from "../features/dashboard/data/order-time";
import { Order_Trends_Mock_Data } from "../features/dashboard/data/order-trend";
import { Rating_MockData } from "../features/dashboard/data/rating-mock-data";
import { Revenue_Mock_Data } from "../features/dashboard/data/revenue";

export default function Dashboard() {
  return (
    <div className="max-w-7xl">
      <h2>Dashboard</h2>
      <div className="flex flex-col lg:gap-10">
        <div className="flex flex-col md:flex-row md:space-x-2 lg:space-x-5">
          <RevenueBarChat data={Revenue_Mock_Data} />
          <OrderTimePieChart data={Order_Time_Mock_Data} />
        </div>
        <div className="flex flex-col md:flex-row lg:gap-5 w-full">
          <div className="w-full">
            <RatingBubbles data={Rating_MockData} />
          </div>

          <div className="w-full">
            <MostOrderedSection />
          </div>

          <div className="w-full">
            <OrderLineChart data={Order_Trends_Mock_Data} />
          </div>
        </div>
      </div>
    </div>
  );
}
