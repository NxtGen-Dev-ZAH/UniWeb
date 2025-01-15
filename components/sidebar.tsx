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
  User
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("");
  const [activePath, setActivePath] = useState("dashboard");

  const menuItems = [
    {
      title: "Learning Outcomes",
      icon: <Target className="w-5 h-5" />,
      path: "outcomes",
      submenu: [
        { title: "View Outcomes", path: "view-outcomes" },
        { title: "Create Outcome", path: "create-outcome" },
        { title: "Map Outcomes", path: "map-outcomes" }
      ]
    },
    {
      title: "Assessments",
      icon: <ClipboardCheck className="w-5 h-5" />,
      path: "assessments",
      submenu: [
        { title: "Assessment Tasks", path: "tasks" },
        { title: "Rubrics", path: "rubrics" },
        { title: "Grade Center", path: "grades" }
      ]
    },
    {
      title: "Course Content",
      icon: <BookOpen className="w-5 h-5" />,
      path: "content",
      submenu: [
        { title: "Modules", path: "modules" },
        { title: "Resources", path: "resources" },
        { title: "Activities", path: "activities" }
      ]
    },
    {
      title: "Student Progress",
      icon: <BarChart className="w-5 h-5" />,
      path: "progress",
      submenu: [
        { title: "Performance", path: "performance" },
        { title: "Analytics", path: "analytics" },
        { title: "Reports", path: "reports" }
      ]
    },
    {
      title: "Class Management",
      icon: <Users className="w-5 h-5" />,
      path: "management",
      submenu: [
        { title: "Students", path: "students" },
        { title: "Groups", path: "groups" },
        { title: "Attendance", path: "attendance" }
      ]
    }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setActiveMenu("");
  };

  const toggleSubmenu = (title: string) => {
    setActiveMenu(activeMenu === title ? "" : title);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-gray-100 transition-all duration-300 
        ${isOpen ? "w-64" : "w-20"} shadow-xl`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <GraduationCap className={`w-8 h-8 text-blue-400 ${!isOpen && "mx-auto"}`} />
          {isOpen && <span className="text-lg font-semibold">OBE System</span>}
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>

      {/* User Profile */}
      <div className={`p-4 border-b border-gray-700 ${!isOpen && "text-center"}`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <User className="w-6 h-6 text-gray-300" />
          </div>
          {isOpen && (
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-gray-400">Instructor</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div key={item.path}>
            <button
              onClick={() => toggleSubmenu(item.title)}
              className={`w-full flex items-center p-3 space-x-3 hover:bg-gray-800 transition-colors
                ${!isOpen ? "justify-center" : "px-4"} 
                ${activePath.startsWith(item.path) ? "bg-gray-800 text-blue-400" : ""}`}
            >
              {item.icon}
              {isOpen && (
                <>
                  <span className="flex-1 text-left">{item.title}</span>
                  {item.submenu && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        activeMenu === item.title ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </>
              )}
            </button>

            {/* Submenu */}
            {isOpen && activeMenu === item.title && (
              <div className="bg-gray-800">
                {item.submenu.map((subItem) => (
                  <button
                    key={subItem.path}
                    onClick={() => setActivePath(subItem.path)}
                    className={`w-full p-3 pl-12 text-left hover:bg-gray-700 transition-colors
                      ${activePath === subItem.path ? "text-blue-400" : "text-gray-300"}`}
                  >
                    {subItem.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-full border-t border-gray-700">
        <button
          className={`w-full flex items-center p-4 hover:bg-gray-800 transition-colors
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
