import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type SidebarNavItemProps = {
  name: string;
  path: string;
  icon: LucideIcon;
  isOpen: boolean;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

export default function SidebarNavItem({
  name,
  path,
  icon: Icon,
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
        py-3
        px-3
        transition-all
        duration-300
        md:justify-start
        
        ${isOpen ? "px-4" : "justify-center"}

        ${
          !isImplemented
            ? "text-[#A0AEC0] cursor-not-allowed opacity-60"
          :isActive
            ? "bg-[#707FDD]/10 text-[#5A6ACF]"
            : "text-[#273240] hover:bg-[#707FDD]/7"
        }
        `
      }
    >
      <Icon size={20} className="shrink-0" />

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
