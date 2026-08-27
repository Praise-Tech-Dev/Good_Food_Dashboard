import { NavLink } from "react-router-dom";
// import type { LucideIcon } from "lucide-react";

type SidebarNavItemProps = {
  name: string;
  path: string;
  icon: string;
  isOpen: boolean;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

export default function SidebarNavItem({
  name,
  path,
  icon,
  isOpen,
  closeSidebar,
  toggleSidebar,
}: SidebarNavItemProps) {
  const isImplemented = path === "/";
  return (
    <NavLink
      to={path}
      end={path === "/"}
      onClick={(e) => {
        if (!isImplemented) {
          e.preventDefault();
          return;
        }
        if (!isOpen && window.innerWidth < 768) {
          e.preventDefault();
          toggleSidebar();
          return;
        }

        closeSidebar();
      }}
      className={({ isActive }) =>
        `
        flex
        items-center
        gap-3
        rounded-lg
        py-2
        md:py-3
        px-1
        md:px-5
        transition-all
        duration-300
        md:justify-start
        
        ${isOpen ? "px-5" : ""}

        ${
          !isImplemented
            ? "text-[#A0AEC0] cursor-not-allowed opacity-60"
            : isActive
              ? "bg-[#707FDD]/10 text-[#5A6ACF]"
              : "text-[#273240] hover:bg-[#707FDD]/7"
        }
        `
      }
    >
      <img src={icon} alt={`${name} icon`} className="w-5 h-5 shrink-0" />

      <span
        className={`
          whitespace-nowrap
          overflow-hidden
          transition-all
          duration-300

          ${isOpen ? "opacity-100" : "w-0 opacity-0"}
          ${!isImplemented ? "text-[#A0AEC0]" : ""}
          md:w-auto
          md:opacity-100
        `}
      >
        {name}
      </span>
    </NavLink>
  );
}
