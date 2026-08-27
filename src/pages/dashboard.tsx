
import { MostOrderedSection } from "../features/dashboard/components/most-ordered/most-ordered-section";
import { OrderTimePieChart } from "../features/dashboard/components/order-time/order-time-pie-chart";
import { OrderLineChart } from "../features/dashboard/components/order-trend/order-trend";
import { RatingBubbles } from "../features/dashboard/components/rating-bubbles";
import { RevenueBarChat } from "../features/dashboard/components/revenue/revenue-bar-chart";
import { Order_Time_Mock_Data } from "../features/dashboard/data/order-time-mock-data";
import { Order_Trends_Mock_Data } from "../features/dashboard/data/order-trend-mock-data";
import { Rating_MockData } from "../features/dashboard/data/rating-mock-data";
import { Revenue_Mock_Data } from "../features/dashboard/data/revenue-mock-data";

export default function Dashboard() {
  return (
    <div className="w-full">
      <h2 className="text-[#1F384C] font-medium text-lg">Dashboard</h2>

      {/* the container for the dashboard content  */}
      <div className="overflow-hidden">
        {/* 2: 1 display for revenue chart vs order time pie chart  */}
        <div className="grid grid-cols-1 lg:grid-cols-3  border-b border-[#C8CBD9]">
          <div className="lg:col-span-2 py-6 lg:border-b-0 lg:border-r border-[#C8CBD9] lg:pr-5">
            <RevenueBarChat data={Revenue_Mock_Data} />
          </div>
          <div className="py-6 lg:px-6">
            <OrderTimePieChart data={Order_Time_Mock_Data} />
          </div>
        </div>

        {/* 2nd row containing rating bubbles, most ordered food , and oder trend */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#C8CBD9]">
          <div className="py-6 ">
            <RatingBubbles data={Rating_MockData} />
          </div>

          <div className="py-6 lg:px-6">
            <MostOrderedSection />
          </div>

          <div className="py-6 lg:px-6">
            <OrderLineChart data={Order_Trends_Mock_Data} />
          </div>
        </div>
      </div>
    </div>
  );
}
