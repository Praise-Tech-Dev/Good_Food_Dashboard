import type { MostOrderedFood } from "../../types/most-ordered-food.types";

interface MostOrderedCardProps  {
    data: MostOrderedFood[];
}

export const MostOrderedCard = ({data}: MostOrderedCardProps) => {
    return (
      <div className="flex flex-col gap-4 w-full max-w-70 divide-y divide-slate-100">
        {data.map((item, index) => (
          <div className="flex lg:gap-4 justify-between py-2">
            <div
              className="flex md:gap-2 lg:gap-4 text-[#273240] text-[12px] leading-5"
              key={index || item.id}
            >
              <div className="rounded-full w-7 overflow-hidden border border-slate-400 shadow-sm">
                <img
                  src={item.image}
                  alt={item.image}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="">{item.name}</div>
            </div>
            <div className="text-[#273240] text-[12px] leading-5">
              IDR {item.price.toLocaleString("id-ID")}{" "}
            </div>
          </div>
        ))}
      </div>
    );
}