"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ShieldCheck,
  ChevronDown,
  Phone,
  Mail,
  Sun,
  Moon,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  /* Close dropdowns on route change */ 
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  /* Handle outside click and ESC key */ 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const navItemClass = (path: string, isDropdown = false) => {
    const isActive =
      path === "/" ? pathname === "/" : pathname.startsWith(path);
    return `flex items-center h-full transition-colors whitespace-nowrap text-[12px] min-[1440px]:text-[13px] min-[1536px]:text-[14px] font-medium ${isActive || (isDropdown && activeDropdown === path.substring(1)) ? "text-[#B68A2C] border-b-[2px] border-[#B68A2C]" : "text-[var(--header-text)] hover:text-[#B68A2C] border-b-[2px] border-transparent"}`;
  };

  return (
    <header
      className="sticky top-0 z-[1000] w-full box-border transition-colors duration-200 border-b border-[var(--header-border)] bg-[var(--bg-primary)] shadow-sm dark:shadow-none"
      ref={navRef}
    >
      {" "}
      {/* Top Corporate Identification & Contact Bar - Compact 35px */}
      <div className="bg-[var(--header-top-bg)] text-[var(--header-top-text)] text-xs h-[35px] flex items-center px-4 border-b border-[var(--header-border)] hidden lg:block w-full box-border">
        {" "}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 min-[1366px]:px-8 flex justify-between items-center h-full">
          {" "}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[var(--header-top-text)] font-[400] text-[13px] tracking-[0.01em]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B68A2C]" /> GSTIN:
              21ARXPK7658Q1ZO
            </span>
            <span className="text-[var(--text-muted)] border-l border-[var(--header-border)] pl-6 text-[13px] font-[400] tracking-[0.01em]">
              Ferro Alloys & Metallurgical Engineering
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:9776111022"
              className="flex items-center gap-1.5 hover:text-[#B68A2C] transition-colors text-[13px] font-[400] tracking-[0.01em]"
            >
              <Phone className="w-3 h-3 text-[#B68A2C]" />
              +91 9776111022 (Founder)
            </a>
            <a
              href="mailto:venkat_2jay@yahoo.co.in"
              className="flex items-center gap-1.5 hover:text-[#B68A2C] transition-colors text-[13px] font-[400] tracking-[0.01em]"
            >
              <Mail className="w-3 h-3 text-[#B68A2C]" />
              venkat_2jay@yahoo.co.in
            </a>
          </div>
        </div>{" "}
      </div>{" "}
      {/* Main Navigation - Approx 70px height for compactness */}
      <div className="bg-[var(--header-nav-bg)] w-full border-t border-b border-[var(--header-border)] box-border">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 min-[1536px]:px-10 box-border flex items-center h-[70px] justify-between min-[1536px]:justify-start min-[1536px]:gap-8">
          
          {/* Brand Emblem & Name - Dedicated Left Area */}
          <div className="flex items-center h-full shrink-0 w-auto flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0 h-full w-full"
            >
              {/* V Logo Box */}
              <div className="flex items-center justify-center w-[42px] h-[42px] bg-[#203746] border border-[#B68A2C] shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-[800] text-[24px] leading-none font-sans">
                  V
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="company-logo block text-[18px] font-[600] leading-[1.2] text-[var(--header-text)] transition-colors whitespace-nowrap">
                  Venkateswar Engg
                </span>
                <span className="company-logo block text-[16px] font-[400] leading-[1.3] text-[var(--header-text-secondary)] transition-colors whitespace-nowrap">
                  Works Pvt. Ltd.
                </span>
              </div>
            </Link>
          </div>
          
          {/* Divider 1 */}
          <div className="hidden min-[1536px]:block w-[1px] h-[30px] bg-[#D8DCDA] shrink-0" />
          
          {/* Desktop Navigation Links */}
          <nav className="hidden min-[1536px]:flex items-center justify-start h-full gap-[22px] min-w-0">
            {" "}
            <Link href="/" className={navItemClass("/")}>
              {" "}
              Home{" "}
            </Link>{" "}
            <Link href="/about" className={navItemClass("/about")}>
              {" "}
              About Us{" "}
            </Link>{" "}
            <Link href="/journey" className={navItemClass("/journey")}>
              {" "}
              Our Journey{" "}
            </Link>{" "}
            {/* Services Dropdown */}{" "}
            <div className="relative h-full flex items-center">
              {" "}
              <button
                onClick={() => toggleDropdown("services")}
                className={`${navItemClass("/services", true)} gap-1 focus:outline-none`}
                aria-expanded={activeDropdown === "services"}
              >
                {" "}
                Services{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                />{" "}
              </button>{" "}
              <div
                className={`absolute top-[70px] left-0 w-[280px] bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-md p-2 transition-all duration-150 transform origin-top-left z-50 ${activeDropdown === "services" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
              >
                {" "}
                <Link
                  href="/services/furnace-om"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Furnace O&M (5-24 MVA)
                </Link>{" "}
                <Link
                  href="/services/mrp"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Metal Recovery Plants (50-1500 TPD)
                </Link>{" "}
                <Link
                  href="/services/sinter-plants"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Sinter Plants (40-200 TPD)
                </Link>{" "}
                <Link
                  href="/services/boot-boo"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  BOOT / BOO Partnership Models
                </Link>{" "}
                <Link
                  href="/services/turnkey-projects"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Turnkey Project Execution
                </Link>{" "}
                <Link
                  href="/services/beneficiary-units"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Beneficiary Units
                </Link>{" "}
                <Link
                  href="/services/fabrication-erection"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Fabrication & Erection
                </Link>{" "}
                <Link
                  href="/services/mechanical-maintenance"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Mechanical Maintenance
                </Link>{" "}
                <Link
                  href="/services/electrical-maintenance"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Electrical Maintenance
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            {/* Projects Dropdown */}{" "}
            <div className="relative h-full flex items-center">
              {" "}
              <button
                onClick={() => toggleDropdown("projects")}
                className={`${navItemClass("/projects", true)} gap-1 focus:outline-none`}
                aria-expanded={activeDropdown === "projects"}
              >
                {" "}
                Projects{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "projects" ? "rotate-180" : ""}`}
                />{" "}
              </button>{" "}
              <div
                className={`absolute top-[70px] left-0 w-[240px] bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-md p-2 transition-all duration-150 transform origin-top-left z-50 ${activeDropdown === "projects" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
              >
                {" "}
                <Link
                  href="/projects/furnace"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Furnace O&M Projects
                </Link>{" "}
                <Link
                  href="/projects/mrp"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  MRP Projects
                </Link>{" "}
                <Link
                  href="/projects/sinter"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Sinter Projects
                </Link>{" "}
                <Link
                  href="/projects/international"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  International Projects
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            {/* Operations Dropdown */}{" "}
            <div className="relative h-full flex items-center">
              {" "}
              <button
                onClick={() => toggleDropdown("operations")}
                className={`${navItemClass("/operations", true)} gap-1 focus:outline-none`}
                aria-expanded={activeDropdown === "operations"}
              >
                {" "}
                Operations{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "operations" ? "rotate-180" : ""}`}
                />{" "}
              </button>{" "}
              <div
                className={`absolute top-[70px] left-0 w-[290px] bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-md p-2 transition-all duration-150 transform origin-top-left z-50 ${activeDropdown === "operations" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
              >
                {" "}
                <Link
                  href="/operations/raw-materials"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Raw Material Specs & Storage
                </Link>{" "}
                <Link
                  href="/operations/material-prep"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Material Preparation
                </Link>{" "}
                <Link
                  href="/operations/saf-furnace"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  SAF Furnace Smelting
                </Link>{" "}
                <Link
                  href="/operations/casting-cooling"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Casting & Slag Granulation
                </Link>{" "}
                <Link
                  href="/operations/breaking-sorting"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Metal Breaking & Sizing
                </Link>{" "}
                <Link
                  href="/operations/packing-dispatch"
                  className="block px-4 py-2.5 text-[14px] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[#B68A2C] transition-colors whitespace-nowrap"
                >
                  Packing & Dispatch
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <Link href="/innovation" className={navItemClass("/innovation")}>
              {" "}
              Innovation{" "}
            </Link>{" "}
            <Link href="/kpi" className={navItemClass("/kpi")}>
              {" "}
              KPI Specs{" "}
            </Link>{" "}
            <Link href="/manpower" className={navItemClass("/manpower")}>
              {" "}
              Manpower{" "}
            </Link>{" "}
            <Link href="/clients" className={navItemClass("/clients")}>
              {" "}
              Clients{" "}
            </Link>{" "}
          </nav>{" "}
          
          {/* Divider 2 */}
          <div className="hidden min-[1536px]:block w-[1px] h-[30px] bg-[#D8DCDA] shrink-0" />
          
          {/* Right Controls: Theme Switcher & Contact Button */}
          <div className="hidden min-[1536px]:flex items-center h-full gap-[22px] shrink-0 min-[1536px]:ml-auto">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center shrink-0 transition-colors group border-none outline-none focus:outline-none w-[40px] h-[40px] static flex-[0_0_40px]"
              title="Toggle Theme"
              aria-label="Toggle Theme Mode"
            >
              {theme === "light" ? (
                <Moon className="w-[20px] h-[20px] text-[var(--theme-toggle-icon)] group-hover:text-[#B68A2C] transition-colors" />
              ) : (
                <Sun className="w-[20px] h-[20px] text-[var(--theme-toggle-icon)] group-hover:text-[#B68A2C] transition-colors" />
              )}
            </button>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 h-[52px] min-w-[180px] rounded-[6px] bg-[#B68A2C] text-[#FFFFFF] hover:bg-[#9B7626] transition-colors font-semibold text-[14px] shrink-0 whitespace-nowrap"
            >
              <span>CONTACT US</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          {/* Mobile Menu & Theme Controls (Shown below 1536px) */}
          <div className="flex min-[1536px]:hidden items-center gap-4 flex-none ml-auto shrink-0">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center shrink-0 transition-colors group focus:outline-none p-2"
              aria-label="Toggle Theme Mode"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-[var(--theme-toggle-icon)] group-hover:text-[#B68A2C] transition-colors" />
              ) : (
                <Sun className="w-5 h-5 text-[var(--theme-toggle-icon)] group-hover:text-[#B68A2C] transition-colors" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center border border-[var(--header-border)] text-[var(--header-text)] hover:bg-[var(--theme-toggle-hover)] shrink-0"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="min-[1366px]:hidden bg-[var(--bg-surface)] border-b border-[var(--border-color)] px-4 pt-2 pb-6 space-y-2 text-[15px] font-medium">
          {" "}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          >
            Home
          </Link>{" "}
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          >
            About Us
          </Link>{" "}
          <Link
            href="/journey"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          >
            Our Journey
          </Link>{" "}
          <div>
            {" "}
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full flex justify-between items-center px-3 py-2 hover:bg-[var(--bg-secondary)] text-left text-[var(--text-primary)]"
            >
              {" "}
              Services{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
              />{" "}
            </button>{" "}
            {activeDropdown === "services" && (
              <div className="pl-4 space-y-1 my-1 border-l-2 border-[var(--accent-brass)] text-sm">
                {" "}
                <Link
                  href="/services/furnace-om"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Furnace O&M
                </Link>{" "}
                <Link
                  href="/services/mrp"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Metal Recovery Plants
                </Link>{" "}
                <Link
                  href="/services/sinter-plants"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Sinter Plants
                </Link>{" "}
                <Link
                  href="/services/boot-boo"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  BOOT / BOO Models
                </Link>{" "}
                <Link
                  href="/services/turnkey-projects"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Turnkey Projects
                </Link>{" "}
                <Link
                  href="/services/beneficiary-units"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Beneficiary Units
                </Link>{" "}
                <Link
                  href="/services/fabrication-erection"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Fabrication & Erection
                </Link>{" "}
              </div>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <button
              onClick={() => toggleDropdown("projects")}
              className="w-full flex justify-between items-center px-3 py-2 hover:bg-[var(--bg-secondary)] text-left text-[var(--text-primary)]"
            >
              {" "}
              Projects{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "projects" ? "rotate-180" : ""}`}
              />{" "}
            </button>{" "}
            {activeDropdown === "projects" && (
              <div className="pl-4 space-y-1 my-1 border-l-2 border-[var(--accent-brass)] text-sm">
                {" "}
                <Link
                  href="/projects/furnace"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Furnace O&M Projects
                </Link>{" "}
                <Link
                  href="/projects/mrp"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  MRP Projects
                </Link>{" "}
                <Link
                  href="/projects/sinter"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Sinter Projects
                </Link>{" "}
                <Link
                  href="/projects/international"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  International Projects
                </Link>{" "}
              </div>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <button
              onClick={() => toggleDropdown("operations")}
              className="w-full flex justify-between items-center px-3 py-2 hover:bg-[var(--bg-secondary)] text-left text-[var(--text-primary)]"
            >
              {" "}
              Operations{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "operations" ? "rotate-180" : ""}`}
              />{" "}
            </button>{" "}
            {activeDropdown === "operations" && (
              <div className="pl-4 space-y-1 my-1 border-l-2 border-[var(--accent-brass)] text-sm">
                {" "}
                <Link
                  href="/operations/raw-materials"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Raw Material Specs & Storage
                </Link>{" "}
                <Link
                  href="/operations/material-prep"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Material Preparation
                </Link>{" "}
                <Link
                  href="/operations/saf-furnace"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  SAF Furnace Smelting
                </Link>{" "}
                <Link
                  href="/operations/casting-cooling"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Casting & Slag Granulation
                </Link>{" "}
                <Link
                  href="/operations/breaking-sorting"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Metal Breaking & Sizing
                </Link>{" "}
                <Link
                  href="/operations/packing-dispatch"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent-brass)]"
                >
                  Packing & Dispatch
                </Link>{" "}
              </div>
            )}{" "}
          </div>{" "}
          <Link
            href="/innovation"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          >
            Innovation
          </Link>{" "}
          <Link
            href="/kpi"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          >
            KPI Specs
          </Link>{" "}
          <Link
            href="/manpower"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          >
            Manpower
          </Link>{" "}
          <Link
            href="/clients"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          >
            Clients
          </Link>{" "}
          <div className="pt-2 flex flex-col gap-2">
            {" "}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="industrial-button-primary text-center uppercase tracking-wider text-[14px] flex items-center justify-center gap-1.5 py-3"
            >
              {" "}
              <span>CONTACT US</span>{" "}
              <span className="contact-arrow" aria-hidden="true">
                →
              </span>{" "}
            </Link>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </header>
  );
}
