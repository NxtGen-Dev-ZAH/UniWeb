import React, { useState } from "react";
import {
  BookOpen,
  Users,
  Calendar,
  ClipboardCheck,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Target,
  BarChart,
  FileText,
  User,
} from "lucide-react";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  submenu?: MenuItem[];
}

interface MenuItemProps {
  item: MenuItem;
  isOpen: boolean;
  level?: number;
  activePath: string;
  setActivePath: (path: string) => void;
  activeMenus: string[];
  toggleSubmenu: (title: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isOpen,
  level = 0,
  activePath,
  setActivePath,
  activeMenus,
  toggleSubmenu,
}) => {
  const isActive = activeMenus.includes(item.title);
  const paddingLeft = level * 8 + 16;

  return (
    <div key={item.path}>
      <button
        onClick={() => toggleSubmenu(item.title)}
        className={`w-full flex items-center p-3 space-x-3 hover:bg-green-800 transition-colors
          ${!isOpen ? "justify-center" : "px-4"} 
          ${
            activePath.startsWith(item.path) ? "bg-green-800 text-blue-400" : ""
          }
          ${level > 0 ? "bg-green-800" : ""}`}
        style={isOpen ? { paddingLeft: `${paddingLeft}px` } : {}}
      >
        {item.icon}
        {isOpen && (
          <>
            <span className="flex-1 text-left">{item.title}</span>
            {item.submenu && (
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  isActive ? "rotate-90" : ""
                }`}
              />
            )}
          </>
        )}
      </button>

      {isOpen && isActive && item.submenu && (
        <div className={`bg-green-800 ${level > 0 ? "bg-opacity-50" : ""}`}>
          {item.submenu.map((subItem) => (
            <MenuItem
              key={subItem.path}
              item={subItem}
              isOpen={isOpen}
              level={level + 1}
              activePath={activePath}
              setActivePath={setActivePath}
              activeMenus={activeMenus}
              toggleSubmenu={toggleSubmenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeMenus, setActiveMenus] = useState<string[]>([]);
  const [activePath, setActivePath] = useState<string>("dashboard");

  const menuItems: MenuItem[] = [
    {
      title: "Semesters",
      icon: <Target className="w-5 h-5" />,
      path: "outcomes",
      submenu: [
        {
          title: "Fall",
          icon: <Target className="w-5 h-5" />,
          path: "fall",
          submenu: [
            {
              title: "Semester 1",
              path: "fall-course-1",
              icon: <BookOpen className="w-5 h-5" />,
            },
            {
              title: "Semester 3",
              path: "fall-course-3",
              icon: <BookOpen className="w-5 h-5" />,
            }, {
              title: "Semester 5",
              path: "fall-course-5",
              icon: <BookOpen className="w-5 h-5" />,
            }, {
              title: "Semester 7",
              path: "fall-course-7",
              icon: <BookOpen className="w-5 h-5" />,
            },
           
          ],
        },
        {
          title: "Spring",
          icon: <Target className="w-5 h-5" />,
          path: "spring",
          submenu: [
            {
              title: "Semester 2",
              path: "spring-course-1",
              icon: <BookOpen className="w-5 h-5" />,
            },
            {
              title: "Semester 4",
              path: "spring-course-4",
              icon: <BookOpen className="w-5 h-5" />,
            }, {
              title: "Semester 6",
              path: "spring-course-6",
              icon: <BookOpen className="w-5 h-5" />,
            }, {
              title: "Semester 8",
              path: "spring-course-8",
              icon: <BookOpen className="w-5 h-5" />,
            }
          ],
        },
      ],
    },
  ];

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
    setActiveMenus([]);
  };

  const toggleSubmenu = (title: string): void => {
    setActiveMenus((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      } else {
        return [...prev, title];
      }
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-green-700 text-white transition-all duration-300 
        ${isOpen ? "w-64" : "w-20"} shadow-xl`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-green-700">
        <div className="flex items-center space-x-3">
          <GraduationCap
            className={`w-8 h-8 text-blue-400 ${!isOpen && "mx-auto"}`}
          />
          {isOpen && <span className="text-lg font-semibold">OBE System</span>}
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-green-800 transition-colors"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* User Profile */}
      <div
        className={`p-4 border-b border-green-700 ${!isOpen && "text-center"}`}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center">
            <User className="w-6 h-6 text-green-300" />
          </div>
          {isOpen && (
            <div>
              <div className="font-medium">Saba un Nisa</div>
              <div className="text-sm text-green-400">Instructor</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            item={item}
            isOpen={isOpen}
            activePath={activePath}
            setActivePath={setActivePath}
            activeMenus={activeMenus}
            toggleSubmenu={toggleSubmenu}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-full border-t border-green-700">
        <button
          className={`w-full flex items-center p-4 hover:bg-green-800 transition-colors
            ${!isOpen ? "justify-center" : "space-x-3"}`}
        >
          <Settings className="w-5 h-5" />
          {isOpen && <span>Settings</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
