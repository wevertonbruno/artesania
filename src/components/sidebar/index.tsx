import React, { useContext, ElementType } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SidebarContext } from "../../context/SidebarContext";
import { routerConfig } from "../../router";
import { MoreVertical, ChevronFirst, ChevronLast } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarItemProps {
  icon: ElementType;
  text: string;
  link: string;
  expanded: boolean;
  active?: boolean;
}

export default function Sidebar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const location = useLocation();

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-satin-100 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-start items-center relative">
          <img
            src="/logo.png"
            className="w-10 h-10 rounded-md"
            alt="Artesania"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${isOpen ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h3 className="font-semibold text-lg">Artesania</h3>
              <h5 className="text-md text-gray-600 whitespace-nowrap -mt-1">
                Presentes afetivos
              </h5>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg text-zinc-50 font-bold bg-satin-800 hover:bg-satin-900 absolute  -right-4 top-6 z-10"
          >
            {isOpen ? (
              <ChevronFirst strokeWidth={3} className="w-4 h-4" />
            ) : (
              <ChevronLast strokeWidth={3} className="w-4 h-4" />
            )}
          </button>
        </div>

        <ul className="flex-1 px-3">
          {routerConfig
            .filter((config) => !config.hidden)
            .map((config) => (
              <SidebarItem
                key={config.path}
                icon={config.icon}
                text={config.text}
                link={config.path}
                active={location.pathname === config.path}
                expanded={isOpen}
              />
            ))}
        </ul>

        <div className="border-t shadow-sm">
          <hr className="dashed" />
          <div className="flex p-3">
            <img
              src="https://ui-avatars.com/api/?background=ffffff&color=514336&bold=true&name=Weverton+Bruno"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`
              flex justify-between items-center
              overflow-hidden transition-all ${isOpen ? "w-52 ml-3" : "w-0"}
          `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Weverton Bruno</h4>
                <span className="text-xs text-gray-600">
                  wevertonbrunera@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon: Icon,
  text,
  active = false,
  link,
  expanded,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        to={link}
        className={`
        relative flex items-center p-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-satin-300 text-gray-800"
            : "hover:bg-satin-200 text-gray-700"
        }
    `}
      >
        <Icon />
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>

        {!expanded && (
          <div
            className={`
          z-10
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-satin-200 text-satin-900 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </Link>
    </li>
  );
}
