import { Bell, ChevronDown } from "lucide-react";
import type { UserProfile } from "../../features/dashboard/types/user-profile.types";
import { useEffect, useRef, useState } from "react";

interface TopNavProps {
  user_data: UserProfile;
  hasUnreadNotification?: boolean;
}

export default function TopNav({user_data, hasUnreadNotification}: TopNavProps) {
  const [isprofileMenuOpen, setProfileMenuOpen] = useState(false);

  // To handle closing dropdown when user clicks outside
  // Ref for dropdown container
  const menuRef = useRef<HTMLDivElement>(null);

  // document click listener 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // cleanup listener when components unmount 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }

  }, []);
  
  return (
    <header className="flex justify-end items-center max-w-7xl border-b-[0.5px] border-[#C8CBD9] p-4">
      {/* account info and notification icon */}
      <div className="flex items-center gap-4">
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setProfileMenuOpen((prev) => !prev)}
            className="flex items-center gap-4"
          >
            {/* profile picture  */}
            <div className="flex justify-center bg-[#FFE6CC] rounded-full w-8 h-8 items-center">
              <img src={user_data.avatar} />
            </div>
            {/* name  */}
            <div className="text-[#1F384C] text-[12px] ">{user_data.name}</div>
            <div className="">
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isprofileMenuOpen ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {/* profile dropdown card  */}
          {isprofileMenuOpen && (
            <div className="absolute right-0 top-full mt-2  bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50 divide-y divide-slate-100">
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-[#273240]">
                  {user_data.name}
                </p>
                <p className="text-xs text-slate-400 truncate">
                  {user_data.email}
                </p>
              </div>

              {/* profile nav links  */}
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-xs text-slate-600 hover:bg-slate-50">
                  View Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-xs text-slate-600 hover:bg-slate-50">
                  Settings
                </button>
              </div>

              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50">
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>

        {/* notification  */}
        <div className="text-[#B0C3CC] hover:text-[#8E9FA8] relative">
          <Bell className="" fill="currentcolor" size={20} />
          {hasUnreadNotification && (
            <span className="rounded-full absolute top-0 right-1 bg-[#EC5252] w-2 h-2 ring-1 ring-white" />
          )}
        </div>
      </div>
    </header>
  );
}
