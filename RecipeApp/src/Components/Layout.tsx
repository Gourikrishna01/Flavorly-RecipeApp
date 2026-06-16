import React from "react";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Heart,
  Settings,
  LogOut,
  Search,
  Bell,
  UserCircle,
} from "lucide-react";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 p-5">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <img
            src="/flavorly.png"
            alt="Flavorly"
            className="w-12 h-12 rounded-lg"
          />
          <h1 className="text-xl font-bold">Flavorly</h1>
        </div>

        {/* User */}
        <div className="mb-8">
          <p className="text-slate-400 text-sm">Welcome Back</p>
          <h2 className="text-lg font-semibold">User</h2>
        </div>

        {/* Menu */}
        <ul className="space-y-3">
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <LayoutDashboard size={20} />
            Dashboard
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <BookOpen size={20} />
            My Recipes
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <BarChart3 size={20} />
            Analytics
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <Heart size={20} />
            Saved Recipes
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
            <Settings size={20} />
            Settings
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 cursor-pointer mt-10">
            <LogOut size={20} />
            Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <header className="flex items-center justify-end p-4 border-b border-slate-800">
          {/* Search */}
          <div className="relative flex-1 max-w-2xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-8 ml-8">
            <Bell size={28} className="cursor-pointer" />
            <UserCircle size={42} className="cursor-pointer" />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;