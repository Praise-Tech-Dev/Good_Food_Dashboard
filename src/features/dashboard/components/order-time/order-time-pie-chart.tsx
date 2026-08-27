import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { OrderTimeData } from "../../types/order-time.types";
import { OrderTimeCustomToolTip } from "./order-time-tooltip";

interface OrderTimeChartProps {
  data: OrderTimeData[];
}
export const OrderTimePieChart = ({ data }: OrderTimeChartProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="text-sm font-normal leading-5.5">Order Time</h2>
          <p className="text-[13px] font-normal leading-5.25 tracking-[0.5px] text-black/50">
            From 1 -6 Dec, 2020
          </p>
        </div>

        <button className="text-xs font-medium text-[#5A6ACF] bg-[#FBFCFE] border-[#DDE4F0] rounded-[5px] hover:bg-[#FBFCFE]/10 px-3 py-1.5 transition-colors shadow-sm shadow-[#4048520D]">
          View Report
        </button>
      </div>

      <div className="w-full  flex flex-col items-center">
        <div className="w-full h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<OrderTimeCustomToolTip />} />
              <Pie
                data={data}
                dataKey="percentage"
                nameKey="timeOfTheDay"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={0}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* legend  */}

        <div className=" w-full flex items-center justify-center gap-3 md:gap-6 lg:gap-4 mt-3 text-xs">
          {data.map((item) => (
            <div className="" key={item.timeOfTheDay}>
              <div className="flex items-center gap-1">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                {item.timeOfTheDay}
              </div>
              <span>{item.percentage} %</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
