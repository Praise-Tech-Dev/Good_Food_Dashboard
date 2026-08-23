import type { OrderTimeData } from "../../types/order-time.types";

interface OrderTimeCustomToolTipProps {
  active?: boolean;
  payload?: Array<{
    payload: OrderTimeData
  }>;
}

export const OrderTimeCustomToolTip = ({ active, payload}: OrderTimeCustomToolTipProps) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;

        return (
          <div className="bg-[#37375C] text-white px-3.5 py-2.5 shadow-xl text-center min-w-27.5 relative -rotate-0 rounded-lg space-y-2">
            {/* time of the day  */}
            <p className="text-xs font-medium leading-3.25 ">{data.timeOfTheDay}</p>
            {/* time range  */}
            <p className="text-xs leading-3 text-white/50">{data.timeRange}</p>
            <p className="text-[16px] font-medium leading-4">
                {data.orders.toLocaleString()} orders
            </p>
            
          </div>
        );
    }

    return null;
}