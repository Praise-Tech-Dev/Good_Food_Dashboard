import type { MostOrderedFood } from "../../types/most-ordered-food.types";

interface MostOrderedCardProps  {
    data: MostOrderedFood[];
}

export const MostOrderedCard = ({data}: MostOrderedCardProps) => {
    return (
      <div className="flex flex-col w-full divide-y divide-slate-100">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0 gap-2"
          >
            <div className="flex gap-2 lg:gap-4 text-[#273240] text-[12px] leading-5">
              <div className="rounded-full h-7 w-7 overflow-hidden border border-slate-400 shadow-sm shrink-0">
                <img
                  src={item.image}
                  alt={item.image}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="truncate">{item.name}</div>
            </div>
            <div className="text-[#273240] text-[12px] leading-5 shrink-0">
              IDR {item.price.toLocaleString("id-ID")}{" "}
            </div>
          </div>
        ))}
      </div>
    );
}