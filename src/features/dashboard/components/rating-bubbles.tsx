import type { RatingData } from "../types/rating-types"

interface RatingBubblesProps {
    data: RatingData[];
}

const LayoutSlots = [
  {
    position: "top-[6%] left-[8%] z-20",
    size: 107,
    ring: "border-2 border-l-transparent rotate-45",
  },
  {
    position: "top-[15%] right-[2%] z-10",
    size: 168,
    ring: "border-2 border-l-transparent rotate-45",
  },
  {
    position: "bottom-[4%] left-[4%] z-10",
    size: 122,
    ring: "border-2 border-t-transparent rotate-12",
  },
];

export const RatingBubbles = ({data} : RatingBubblesProps) => {
    // if there is no rating yet
    if (!data || data.length === 0) {
        return <p className="text-xs text-slate-400"></p>
    }

  return (
    <div className="w-full max-w-[320px] space-y-6">
      {/* title and subtitle  */}
      <div className="">
        <h2 className="text-[14px] font-normal leading-5.5">Your Rating</h2>
        <p className="text-[12px] font-normal leading-5.25 tracking-[0.5px]">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      <div className="relative w-full h-60 max-w-[320px] mx-auto shrink-0">
        {data.map((item, index) => {
          // calculate the size of the rating bubble based on the percentage
          // const diameter = 75 + (item.percentage / 100) * 40;

          const slot = LayoutSlots[index % LayoutSlots.length];

          
          return (
            <div
              key={item.id || index}
              className={`
              absolute flex items-center justify-center
              ${slot.position}
          `}
              style={{
                width: `${slot.size}px`,
                height: `${slot.size}px`,
              }}
            >
              {/* outer ring  */}
              <div
                className={`absolute -inset-1.5 rounded-full pointer-events-none ${item.color.border} ${slot.ring}`}
              />
              {/* inner circle  */}
              <div
                className={`
                w-full h-full rounded-full flex flex-col items-center justify-center
                shadow-sm transition-transform duration-200 hover:scale-105
                ${item.color.bg} ${item.color.text}
              `}
              >
                <span
                  className="font-semibold tracking-tight"
                  style={{ fontSize: `${slot.size * 0.22}px`, lineHeight: 1 }}
                >
                  {item.percentage}%
                </span>
                <span
                  className={`font-medium ${item.color.text}`}
                  style={{ fontSize: `${slot.size * 0.11}px` }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
