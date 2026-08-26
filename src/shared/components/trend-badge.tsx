import { ArrowDown, ArrowUp } from "lucide-react";

interface TrendBadgeProps {
    value: number;
    comparisonText?: string;
}
export const TrendBadge = ({
    value,
    comparisonText = "vs last week"
}: TrendBadgeProps) => {
    const isPositive = value >= 0;
    const absValue = Math.abs(value);

    return (
      <div className="flex items-center gap-1 text-[12px]">
        {/* trend growth icon and percentage  */}
        <span
          className={`flex items-center gap-0.5 font-semibold ${
            isPositive ? "text-[#149D52]" : "text-[#F2383A]"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="w-2.5 h-2.5 stroke[1.5]" />
          ) : (
            <ArrowDown className="w-2.5 h-2.5 stroke-[1.5]" />
          )}
          {absValue} %
        </span>

        <span className="text-[#8A92A6]">{comparisonText}</span>
      </div>
    );
}