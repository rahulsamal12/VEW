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
  User as UserIcon
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

  useEffect(() => {
    if (pathname !== "/login") {
      const token = getToken();
      if (!token) {
        router.push("/login");
      }
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
    <div className="min-h-screen flex bg-[var(--admin-bg)] transition-colors duration-200">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-[260px] flex-col bg-[var(--admin-sidebar)] border-r border-[var(--admin-border)] flex-shrink-0">
        <div className="h-16 border-b border-[var(--admin-border)] flex items-center gap-3 px-5 flex-shrink-0">
          <div className="w-8 h-8 bg-[var(--admin-accent)] text-white flex items-center justify-center font-bold text-sm border border-[var(--admin-brass)]">
            V
          </div>
          <div className="min-w-0">
            <h1 className="font-bold text-[var(--admin-text-primary)] text-[13px] truncate">
              Venkateswar Engg Works
            </h1>
            <span className="text-[10px] text-[var(--admin-brass)] font-bold uppercase tracking-wider block truncate">
              CMS Console
            </span>
          </div>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar">
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="mb-6">
              <h3 className="px-5 text-[11px] font-bold text-[var(--admin-text-muted)] uppercase tracking-wider mb-2">
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
                          ? "bg-[var(--admin-bg)] text-[var(--admin-brass)] font-semibold border-l-2 border-[var(--admin-brass)]"
                          : "text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-primary)] hover:bg-[var(--admin-bg)] border-l-2 border-transparent"
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
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 bg-[var(--admin-sidebar)] border-b border-[var(--admin-border)] px-4 sm:px-6 flex items-center justify-between flex-shrink-0 relative z-20">
          <div className="flex items-center gap-4 min-w-0">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -ml-2 text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-primary)]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h2 className="text-[13px] font-bold text-[var(--admin-text-primary)] truncate hidden sm:block">
              Venkateswar Engg Works Pvt. Ltd. — Enterprise Management
            </h2>
            <h2 className="text-[13px] font-bold text-[var(--admin-text-primary)] truncate sm:hidden">
              VEW Administration
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <a
              href="http://localhost:3000"
              target="_blank"
              className="hidden sm:flex text-[var(--admin-brass)] font-semibold text-[13px] hover:underline items-center gap-1.5 mr-2"
            >
              Live Website <ExternalLink className="w-3.5 h-3.5" />
            </a>
            
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center border border-[var(--admin-border)] bg-[var(--admin-bg)] hover:bg-[var(--admin-surface)] transition-colors text-[var(--admin-text-secondary)]"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[var(--admin-brass)]" />}
            </button>

            {/* Admin Account Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 h-9 border border-[var(--admin-border)] bg-[var(--admin-bg)] hover:bg-[var(--admin-surface)] transition-colors focus:outline-none"
              >
                <UserIcon className="w-4 h-4 text-[var(--admin-text-secondary)]" />
                <span className="text-[13px] font-semibold text-[var(--admin-text-primary)] hidden sm:block">
                  Administrator
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-[var(--admin-text-muted)] transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-[var(--admin-surface)] border border-[var(--admin-border)] shadow-md py-1">
                  <div className="px-4 py-2 border-b border-[var(--admin-border)] mb-1">
                    <p className="text-[11px] text-[var(--admin-text-muted)] font-medium uppercase tracking-wider">Signed in as</p>
                    <p className="text-[13px] font-bold text-[var(--admin-text-primary)] truncate">Administrator</p>
                  </div>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-rose-600 hover:bg-[var(--admin-bg)] transition-colors text-left"
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
          <div className="lg:hidden absolute top-16 left-0 w-full h-[calc(100vh-64px)] bg-[var(--admin-bg)] z-10 overflow-y-auto border-b border-[var(--admin-border)]">
            <div className="p-4 space-y-6">
              {navGroups.map((group, gIdx) => (
                <div key={gIdx}>
                  <h3 className="text-[11px] font-bold text-[var(--admin-text-muted)] uppercase tracking-wider mb-2">
                    {group.title}
                  </h3>
                  <div className="space-y-1">
                    {group.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 text-[14px] font-medium ${
                          pathname === item.href
                            ? "bg-[var(--admin-surface)] text-[var(--admin-brass)] border-l-2 border-[var(--admin-brass)]"
                            : "text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-primary)]"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-[var(--admin-border)]">
                 <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--admin-surface)] border border-rose-800 text-rose-500 font-bold text-[14px]"
                  >
                    <LogOut className="w-4 h-4" />
                    Secure Logout
                  </button>
              </div>
            </div>
          </div>
        )}

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scrollbar bg-[var(--admin-bg)]">
          <div className="max-w-[1200px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
