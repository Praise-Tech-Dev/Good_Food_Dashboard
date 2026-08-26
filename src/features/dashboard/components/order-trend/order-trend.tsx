import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import type { OrderTrendData } from "../../types/order-trend.types"
import { TrendBadge } from "../../../../shared/components/trend-badge";

interface OrderLineChartProps {
    data: OrderTrendData[];
}

export const OrderLineChart = ({data}: OrderLineChartProps) => {
    return (
      <div className="w-full">
        <div className="flex items-start justify-between">
          <div className="">
            <h2 className="text-[14px] font-normal leading-5.5">Order</h2>
            <p className="text-[20px] font-medium leading-7">IDR 2.568</p>
            <TrendBadge value={-2.1} />
            <p className="text-[13px] font-normal leading-5.25 tracking-[0.5px]">
              Sales from 1-6 Dec, 2020
            </p>
          </div>

          <button className="text-xs font-medium text-[#5A6ACF] bg-[#FBFCFE] border-[#DDE4F0] rounded-[5px] hover:bg-[#FBFCFE]/10 px-3 py-1.5 transition-colors shadow-sm shadow-[#4048520D]">
            View Report
          </button>
        </div>
        <div className="w-full h-35.25">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            >
              {/* broken horizontal line  */}
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 6"
                stroke="#F1F3F9"
              />
              <XAxis
                dataKey="day"
                axisLine={{ stroke: "#E2E7E7", strokeWidth: 1 }}
                tickLine={false}
                tick={{ fill: "#737B8B", fontSize: 11 }}
              />

              <Tooltip cursor={{ stroke: "#E2E8F0", strokeWidth: 1 }} />
              {/* graph lines  */}
              <Line
                type="linear"
                dataKey="last6Days"
                stroke="#5A6ACF"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="linear"
                dataKey="lastWeek"
                stroke="#E6E8EC"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-3 text-xs text-[#121212]">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#5A6ACF]" />
            Last 6 days
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D8D9DB]" />
            Last Week
          </span>
        </div>
      </div>
    );
}