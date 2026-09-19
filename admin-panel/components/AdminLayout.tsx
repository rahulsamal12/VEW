"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getToken, removeToken } from "@/lib/adminApi";
import { useTheme } from "./ThemeContext";
import {
  LayoutDashboard,
  Settings,
  Flame,
  Layers,
  Factory,
  Globe,
  Users,
  Mail,
  LogOut,
  Sparkles,
  Wrench,
  FileText,
  Building2,
  Menu,
  X,
  Sun,
  Moon,
  ExternalLink,
  ChevronDown,
  User as UserIcon,
  Briefcase
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (pathname !== "/login") {
      const token = getToken();
      if (!token) {
        router.push("/login");
      } else {
        setIsChecking(false);
      }
    } else {
      setIsChecking(false);
    }
  }, [pathname, router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  if (pathname === "/login") {
    return <>{children}</>;
  }

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-admin-bg">
        <div className="w-8 h-8 border-4 border-admin-steel border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const navGroups = [
    {
      title: "OVERVIEW",
      items: [
        { label: "Dashboard", href: "/", icon: LayoutDashboard },
        { label: "Site Settings", href: "/settings", icon: Settings },
      ]
    },
    {
      title: "CONTENT MANAGEMENT",
      items: [
        { label: "Furnace O&M", href: "/projects/furnace", icon: Flame },
        { label: "MRP Projects", href: "/projects/mrp", icon: Layers },
        { label: "Sinter Projects", href: "/projects/sinter", icon: Factory },
        { label: "International", href: "/projects/international", icon: Globe },
        { label: "Operations & SOPs", href: "/operations", icon: FileText },
        { label: "KPI Specs", href: "/kpi", icon: Building2 },
        { label: "Manpower Stats", href: "/manpower", icon: Users },
        { label: "Maintenance", href: "/maintenance", icon: Wrench },
        { label: "Innovation", href: "/innovation", icon: Sparkles },
        { label: "Clients", href: "/clients", icon: Briefcase },
      ]
    },
    {
      title: "COMMUNICATION",
      items: [
        { label: "Enquiries Manager", href: "/enquiries", icon: Mail },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex bg-admin-bg transition-colors duration-200">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-[260px] flex-col bg-admin-sidebar border-r border-admin-border flex-shrink-0 z-20">
        <div className="h-16 border-b border-admin-border flex items-center gap-3 px-5 flex-shrink-0">
          <div className="w-8 h-8 bg-admin-steel text-white flex items-center justify-center font-bold text-sm rounded-sm">
            V
          </div>
          <div className="min-w-0">
            <h1 className="font-semibold text-admin-text-primary text-[14px] truncate tracking-tight">
              Venkateswar Engg
            </h1>
            <span className="text-[10px] text-admin-brass font-bold uppercase tracking-widest block truncate">
              Admin Console
            </span>
          </div>
        </div>

        <nav className="flex-1 py-6 overflow-y-auto custom-scrollbar">
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="mb-6">
              <h3 className="px-5 text-[11px] font-bold text-admin-text-muted uppercase tracking-wider mb-2">
                {group.title}
              </h3>
              <div className="space-y-0.5">
                {group.items.map((item, idx) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      className={`flex items-center gap-3 px-5 py-2.5 transition-colors text-[13px] ${
                        active
                          ? "bg-admin-bg text-admin-steel dark:text-admin-brass font-semibold border-l-2 border-admin-steel dark:border-admin-brass"
                          : "text-admin-text-secondary hover:text-admin-text-primary hover:bg-admin-bg border-l-2 border-transparent"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0 opacity-80" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top Header Bar */}
        <header className="h-16 bg-admin-surface border-b border-admin-border px-4 sm:px-6 flex items-center justify-between flex-shrink-0 z-10 sticky top-0">
          <div className="flex items-center gap-4 min-w-0">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -ml-2 text-admin-text-secondary hover:text-admin-text-primary transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h2 className="text-[14px] font-semibold text-admin-text-primary truncate hidden sm:block">
              Venkateswar Engg Works Pvt. Ltd. — Enterprise Management
            </h2>
            <h2 className="text-[14px] font-semibold text-admin-text-primary truncate sm:hidden">
              VEW Admin
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <a
              href="http://localhost:3000"
              target="_blank"
              className="hidden sm:flex text-admin-steel dark:text-admin-brass font-semibold text-[13px] hover:underline items-center gap-1.5 mr-2"
            >
              Live Website <ExternalLink className="w-3.5 h-3.5" />
            </a>
            
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-sm border border-admin-border bg-admin-surface hover:bg-admin-bg transition-colors text-admin-text-secondary"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-admin-brass" />}
            </button>

            {/* Admin Account Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 h-9 rounded-sm border border-admin-border bg-admin-surface hover:bg-admin-bg transition-colors focus:outline-none"
              >
                <UserIcon className="w-4 h-4 text-admin-text-secondary" />
                <span className="text-[13px] font-medium text-admin-text-primary hidden sm:block">
                  Administrator
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-admin-text-muted transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-admin-surface border border-admin-border shadow-sm rounded-sm py-1 z-50">
                  <div className="px-4 py-2 border-b border-admin-border mb-1">
                    <p className="text-[11px] text-admin-text-muted font-bold uppercase tracking-wider">Signed in as</p>
                    <p className="text-[13px] font-semibold text-admin-text-primary truncate">Administrator</p>
                  </div>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-rose-600 hover:bg-admin-bg transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileOpen(false)}>
            <div 
              className="absolute top-0 left-0 w-[260px] h-full bg-admin-sidebar shadow-xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-16 border-b border-admin-border flex items-center justify-between px-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-admin-steel text-white flex items-center justify-center font-bold text-sm rounded-sm">V</div>
                  <h1 className="font-semibold text-admin-text-primary text-[14px]">VEW Admin</h1>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-admin-text-secondary p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 flex-1 overflow-y-auto space-y-6 custom-scrollbar">
                {navGroups.map((group, gIdx) => (
                  <div key={gIdx}>
                    <h3 className="text-[11px] font-bold text-admin-text-muted uppercase tracking-wider mb-2">
                      {group.title}
                    </h3>
                    <div className="space-y-1">
                      {group.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2.5 text-[14px] rounded-sm font-medium ${
                            pathname === item.href
                              ? "bg-admin-bg text-admin-steel dark:text-admin-brass font-semibold"
                              : "text-admin-text-secondary hover:text-admin-text-primary"
                          }`}
                        >
                          <item.icon className="w-4 h-4 opacity-80" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-admin-border bg-admin-bg">
                 <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-2.5 border border-rose-600/30 bg-rose-600/10 text-rose-600 font-semibold text-[13px] rounded-sm transition-colors hover:bg-rose-600/20"
                  >
                    <LogOut className="w-4 h-4" />
                    Secure Logout
                  </button>
              </div>
            </div>
          </div>
        )}

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scrollbar bg-admin-bg">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
