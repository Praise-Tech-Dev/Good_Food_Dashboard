
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
    <div className="w-full max-w-7xl">
      <h2>Dashboard</h2>

      {/* the container for the dashboard content  */}
      <div className="overflow-hidden">
        {/* 2: 1 display for revenue chart vs order time pie chart  */}
        <div className="grid grid-cols-1 lg:grid-cols-3  border-b border-[#C8CBD9]">
          <div className="lg:col-span-2 p-6 lg:border-b-0 lg:border-r border-[#C8CBD9]">
            <RevenueBarChat data={Revenue_Mock_Data} />
          </div>
          <div className="p-6">
            <OrderTimePieChart data={Order_Time_Mock_Data} />
          </div>
        </div>

        {/* 2nd row containing rating bubbles, most ordered food , and oder trend */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border-b md:border-b-0 md:border-r border-[#C8CBD9]">
            <RatingBubbles data={Rating_MockData} />
          </div>

          <div className="p-6 border-b md:border-b-0 lg:border-r border-[#C8CBD9]">
            <MostOrderedSection />
          </div>

          <div className="p-6">
            <OrderLineChart data={Order_Trends_Mock_Data} />
          </div>
        </div>
      </div>
    </div>
  );
}
