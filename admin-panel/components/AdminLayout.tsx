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
  Briefcase,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vew-admin-sidebar');
    if (saved === 'collapsed') {
      setIsSidebarCollapsed(true);
    }
  }, []);

  const toggleSidebar = () => {
    const nextState = !isSidebarCollapsed;
    setIsSidebarCollapsed(nextState);
    localStorage.setItem('vew-admin-sidebar', nextState ? 'collapsed' : 'expanded');
  };

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
        { label: "Site Images", href: "/images", icon: ImageIcon },
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
      <aside className={`relative hidden lg:flex flex-col bg-[#203746] flex-shrink-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-[width] duration-250 ease-in-out ${isSidebarCollapsed ? 'w-[72px]' : 'w-[320px]'}`}>
        <div className={`h-20 border-b border-[rgba(255,255,255,0.06)] flex items-center px-6 flex-shrink-0 transition-all duration-250 ${isSidebarCollapsed ? 'justify-center px-0 gap-0' : 'gap-3'}`}>
          <div className="w-9 h-9 bg-admin-bg text-admin-steel flex items-center justify-center font-bold text-lg rounded-sm shrink-0 shadow-sm">
            V
          </div>
          {!isSidebarCollapsed && (
            <div className="min-w-0 flex flex-col justify-center overflow-hidden transition-all duration-250">
              <h1 className="font-semibold text-[#F2F4F5] text-[15px] truncate tracking-tight leading-[1.2] whitespace-nowrap">
                Venkateswar Engg
              </h1>
              <span className="text-[11px] text-[#C19A45] font-bold uppercase tracking-wider block truncate mt-0.5 whitespace-nowrap">
                Admin Console
              </span>
            </div>
          )}
        </div>

        <nav className="flex-1 py-6 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="mb-8">
              {!isSidebarCollapsed ? (
                <h3 className="px-6 text-[12px] font-bold text-[#AEBBC3] uppercase tracking-[0.08em] mb-3 whitespace-nowrap">
                  {group.title}
                </h3>
              ) : (
                <div className="h-4 mb-3 border-b border-[rgba(255,255,255,0.06)] mx-4" aria-hidden="true"></div>
              )}
              <div className="space-y-0.5">
                {group.items.map((item, idx) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      title={isSidebarCollapsed ? item.label : undefined}
                      className={`group flex items-center ${isSidebarCollapsed ? 'justify-center px-0' : 'px-6 gap-[14px]'} h-[46px] transition-all duration-250 text-[15px] border-l-[3px] ${
                        active
                          ? "bg-[#F4F5F2] text-[#17232B] font-semibold border-[#C19A45]"
                          : "text-[#C7D0D6] font-medium border-transparent hover:bg-[rgba(255,255,255,0.06)] hover:text-[#F2F4F5]"
                      }`}
                    >
                      <Icon className={`w-[18px] h-[18px] shrink-0 transition-colors duration-250 ${active ? "text-[#405462]" : "text-[#AEBBC3] group-hover:text-[#D5DDE1]"}`} />
                      {!isSidebarCollapsed && <span className="truncate whitespace-nowrap">{item.label}</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        
        <div className="mt-auto h-20 shrink-0" aria-hidden="true"></div>
        <button
          id="admin-sidebar-toggle"
          onClick={toggleSidebar}
          className="absolute right-[12px] bottom-[16px] w-[36px] h-[36px] flex items-center justify-center bg-[#294452] border border-[rgba(255,255,255,0.18)] text-[#F3F4F2] hover:bg-[#B68A2C] hover:text-[#FFFFFF] rounded-[6px] z-50 transition-colors focus:outline-none shadow-sm"
          title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isSidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
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
          <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
            <div 
              className="absolute top-0 left-0 w-[280px] h-full bg-[#203746] shadow-xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-20 border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-admin-bg text-admin-steel flex items-center justify-center font-bold text-lg rounded-sm shrink-0">V</div>
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-[#F2F4F5] text-[15px] leading-[1.2]">VEW Admin</h1>
                    <span className="text-[11px] text-[#C19A45] font-bold uppercase tracking-wider block mt-0.5">Console</span>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-[#AEBBC3] hover:text-[#F2F4F5] p-1 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="py-6 flex-1 overflow-y-auto custom-scrollbar">
                {navGroups.map((group, gIdx) => (
                  <div key={gIdx} className="mb-8">
                    <h3 className="px-6 text-[12px] font-bold text-[#AEBBC3] uppercase tracking-[0.08em] mb-3">
                      {group.title}
                    </h3>
                    <div className="space-y-0.5">
                      {group.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`group flex items-center gap-[14px] px-6 h-[46px] transition-all duration-200 text-[15px] border-l-[3px] ${
                            pathname === item.href
                              ? "bg-[#F4F5F2] text-[#17232B] font-semibold border-[#C19A45]"
                              : "text-[#C7D0D6] font-medium border-transparent hover:bg-[rgba(255,255,255,0.06)] hover:text-[#F2F4F5]"
                          }`}
                        >
                          <item.icon className={`w-[18px] h-[18px] shrink-0 transition-colors duration-200 ${pathname === item.href ? "text-[#405462]" : "text-[#AEBBC3] group-hover:text-[#D5DDE1]"}`} />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-[rgba(255,255,255,0.06)]">
                 <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[rgba(225,29,72,0.1)] hover:bg-[rgba(225,29,72,0.15)] text-rose-500 font-semibold text-[14px] rounded-sm transition-colors border border-[rgba(225,29,72,0.2)]"
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
