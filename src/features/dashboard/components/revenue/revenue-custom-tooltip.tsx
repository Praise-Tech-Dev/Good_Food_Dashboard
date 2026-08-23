interface RevenueCustomTooltipProps {
  active?: boolean;
  payload?: Array<{
      value: number;
      dataKey: string;
      color: string;
  }>;
  label?: string;
}


export const RevenueCustomToolTip = ({active, payload, label}: RevenueCustomTooltipProps) => {
    // only render when active and payload has data 
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white px-1 py-2 rounded-lg shadow-lg text-xs space-y-1">
          <p className="font-semibold text-slate-300">Day {label}</p>
          {/* data for the first bar  */}
          <p className="text-indigo-300">
            Last 6 Days:{" "}
            <span className="font-bold text-white">{payload[0].value}</span>
          </p>
          {/* data for the second bar (last week)  */}
          <p className="text-slate-400">
            Last Week:{" "}
            <span className="font-bold text-white">{payload[1]?.value}</span>
          </p>
        </div>
      );
    }

    // render nothing when there is no hover 
    return null;
}