import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { OrderTimeData } from "../../types/order-time.types";
import { OrderTimeCustomToolTip } from "./order-time-tooltip";

interface OrderTimeChartProps {
  data: OrderTimeData[];
}
export const OrderTimePieChart = ({data}: OrderTimeChartProps) => {
    return (
      <div className="space-y-6 my-10">
        <div className="">
          <h2 className="text-[14px] font-normal leading-5.5">Order Time</h2>
          <p className="text-[13px] font-normal leading-5.25 tracking-[0.5px]">
            From 1 -6 Dec, 2020
          </p>
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

          <div className="flex items-center gap-6 lg:gap-10 mt-3 text-xs">
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
    
}