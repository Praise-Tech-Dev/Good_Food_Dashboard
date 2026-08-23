import { Bell, Search } from "lucide-react";

export default function TopNav() {
  return (
    <header className="flex justify-between items-center max-w-7xl border-b-[0.5px] border-[#C8CBD9] px-4">
      {/* search bar  */}
      <div className=" rounded-md max-w-156.25 p-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-[#F6F6FB] border-[#627B87] focus:outline-none p-2 w-full"
          />
          <Search className="absolute right-3 text-[#627B87]" size={12} />
        </div>
      </div>

      {/* account info and notification icon */}
      <div className="flex items-center gap-4">
        {/* profile picture  */}
        <div className="bg-[#FFE6CC] rounded-full w-8 h-8"></div>
        {/* name  */}
        <div className="text-[#1F384C] text-[12px] ">Delicious Burger</div>
        {/* notification  */}
        <div className="text-[#B0C3CC]">
          <Bell className="" fill="currentcolor" size={16} />
        </div>
      </div>
    </header>
  );
}
