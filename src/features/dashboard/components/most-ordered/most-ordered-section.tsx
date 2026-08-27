import { Most_Ordered_Mock_Data } from "../../data/most-ordered-mock-data";

import { MostOrderedCard } from "./most-ordered-card";



export const MostOrderedSection = () => {
    return (
      <div className="flex flex-col w-full space-y-6">
        {/* title and subtitle  */}
        <div className="space-y-2">
          <h2 className="text-sm font-normal leading-5.5  tracking-[0.5px]">
            Most Ordered Food
          </h2>
          <p className="text-xs font-normal leading-5.25 tracking-[0.5px] text-black/50">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <MostOrderedCard data={Most_Ordered_Mock_Data} />
      </div>
    );
    
    
}