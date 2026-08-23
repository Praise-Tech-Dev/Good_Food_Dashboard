import { Most_Ordered_Mock_Data } from "../../data/most-ordered";

import { MostOrderedCard } from "./most-ordered-card";



export const MostOrderedSection = () => {
    return (
      <div className="flex flex-col w-full space-y-6">
        {/* title and subtitle  */}
        <div className="">
          <h2 className="text-[14px] font-normal leading-5.5">
            Most Ordered Food
          </h2>
          <p className="text-[12px] font-normal leading-5.25 tracking-[0.5px]">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <MostOrderedCard data={Most_Ordered_Mock_Data} />
      </div>
    );
    
    
}