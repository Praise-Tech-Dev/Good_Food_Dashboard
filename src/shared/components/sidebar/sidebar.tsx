import { useLocation } from "react-router-dom";
import { useSidebar } from "../../../context/sidebar-context";
import { useEffect } from "react";
import { X } from "lucide-react";
import { navigation } from "../../../constants/navigation";
import SidebarNavItem from "./sidebar-nav-item";

export default function Sidebar() {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
  const location = useLocation();
  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);
  return (
    <div className="">
      <aside
        className={`
        fixed
        top-0
        left-0
        z-40
        h-screen
        bg-[#F1F2F7]
        text-white
        flex
        flex-col
        transition-all
        duration-300
        ease-in-out

        ${isOpen ? "w-60" : "w-16"}

        md:w-60
      `}
      >
        <div
          className={`transition-all duration-300 ${isOpen ? "px-4" : "px-2"}`}
        >
          <div className="flex items-center gap-3 px-2 border-b border-[#C8CBD9] py-5">
            <div className="flex justify-center items-center rounded-full bg-[#5A67BA] w-6 h-6 text-[11px] font-bold">
              G
            </div>

            <div
              className={`
              transition-all
              duration-300
              text-[11px]
              font-bold
              uppercase
              tracking-[0.5px]
              leading-2.75
              text-[#5A67BA]
              ${isOpen ? "opacity-100" : "w-0 opacity-0"}

              md:w-auto md:opacity-100
            `}
            >
              Good Food
            </div>

            {isOpen && (
              <button
                onClick={closeSidebar}
                className="ml-auto md:hidden text-slate-900"
              >
                <X size={22} />
              </button>
            )}
          </div>

          <div className="flex flex-col pt-10 gap-10">
            {/* Main navigation */}
            <nav className="flex-1 space-y-2 px-2  md:px-4">
              <div
                className={`md:block uppercase text-[#082431]/50 text-[11px] tracking-[1px] leading-2.75 font-normal ${!isOpen ? "hidden" : "block"}`}
              >
                menu
              </div>
              {navigation.menu.map((item) => (
                <SidebarNavItem
                  key={item.name}
                  {...item}
                  isOpen={isOpen}
                  closeSidebar={closeSidebar}
                  toggleSidebar={toggleSidebar}
                />
              ))}
            </nav>

            {/* other navigation */}
            <div className="space-y-2 px-2 md:px-4">
              <div
                className={` md:block uppercase text-[#082431]/50 text-[11px] tracking-[1px] leading-2.75 font-normal ${!isOpen ? "hidden" : "block"}`}
              >
                others
              </div>
              {navigation.others.map((item) => (
                <SidebarNavItem
                  key={item.name}
                  {...item}
                  isOpen={isOpen}
                  closeSidebar={closeSidebar}
                  toggleSidebar={toggleSidebar}
                />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
