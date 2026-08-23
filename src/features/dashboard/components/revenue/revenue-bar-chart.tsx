import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { RevenueCustomToolTip } from "./revenue-custom-tooltip";
import type { RevenueData } from "../../types/revenue.types";

interface RevenueBarChartProps {
  data: RevenueData[];
}
export const RevenueBarChat = ({ data }: RevenueBarChartProps) => {
  return (
    <div className="w-full my-10">
      <div className="">
        <h2 className="text-[14px] font-normal leading-5.5">Revenue</h2>
        <p className="text-[20px] font-medium leading-7">IDR 7.852.000</p>
        <p className="text-[13px] font-normal leading-5.25 tracking-[0.5px]">
          Sales from 1-12 Dec, 2020
        </p>
      </div>

      <div className="w-full max-w-169.5 min-h-30 h-35.25 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={6}
            // margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 6"
              stroke="#E2E7E7"
            />
            {/* Xaxis reads the day key  */}
            <XAxis
              dataKey="day"
              axisLine={{ stroke: "#E2E7E7", strokeWidth: 1 }}
              tickLine={false}
              tick={{ fill: "#737B8B", fontSize: 11 }}
            />

            {/* To show the hover pop up automatically  */}
            <Tooltip content={<RevenueCustomToolTip />} />
            {/* the two bar */}
            <Bar
              dataKey="last6Days"
              fill="#5A6ACF"
              radius={[2, 2, 0, 0]}
              barSize={8}
            />
            <Bar
              dataKey="lastWeek"
              fill="#E6E8EC"
              radius={[2, 2, 0, 0]}
              barSize={8}
            />
          </BarChart>
        </ResponsiveContainer>

        {/* legend  */}
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
    </div>
  );
};
