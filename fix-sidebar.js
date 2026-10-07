const fs = require('fs');

const layoutPath = 'D:/VEW/admin-panel/components/AdminLayout.tsx';
let content = fs.readFileSync(layoutPath, 'utf8');

const desktopSidebar = `      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-[280px] flex-col bg-[#203746] flex-shrink-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="h-20 border-b border-[rgba(255,255,255,0.06)] flex items-center gap-3 px-6 flex-shrink-0">
          <div className="w-9 h-9 bg-admin-bg text-admin-steel flex items-center justify-center font-bold text-lg rounded-sm shrink-0 shadow-sm">
            V
          </div>
          <div className="min-w-0 flex flex-col justify-center">
            <h1 className="font-semibold text-[#F2F4F5] text-[15px] truncate tracking-tight leading-[1.2]">
              Venkateswar Engg
            </h1>
            <span className="text-[11px] text-[#C19A45] font-bold uppercase tracking-wider block truncate mt-0.5">
              Admin Console
            </span>
          </div>
        </div>

        <nav className="flex-1 py-6 overflow-y-auto custom-scrollbar">
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="mb-8">
              <h3 className="px-6 text-[12px] font-bold text-[#AEBBC3] uppercase tracking-[0.08em] mb-3">
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
                      className={\`group flex items-center gap-[14px] px-6 h-[46px] transition-all duration-200 text-[15px] border-l-[3px] \${
                        active
                          ? "bg-[#F4F5F2] text-[#17232B] font-semibold border-[#C19A45]"
                          : "text-[#C7D0D6] font-medium border-transparent hover:bg-[rgba(255,255,255,0.06)] hover:text-[#F2F4F5]"
                      }\`}
                    >
                      <Icon className={\`w-[18px] h-[18px] shrink-0 transition-colors duration-200 \${active ? "text-[#405462]" : "text-[#AEBBC3] group-hover:text-[#D5DDE1]"}\`} />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>`;

content = content.replace(
  /\{\/\* Sidebar - Desktop \*\/\}.*?(?=\{\/\* Main Content Area \*\/\})/s,
  desktopSidebar + '\n\n'
);

const mobileSidebar = `        {/* Mobile Navigation Drawer */}
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
                          className={\`group flex items-center gap-[14px] px-6 h-[46px] transition-all duration-200 text-[15px] border-l-[3px] \${
                            pathname === item.href
                              ? "bg-[#F4F5F2] text-[#17232B] font-semibold border-[#C19A45]"
                              : "text-[#C7D0D6] font-medium border-transparent hover:bg-[rgba(255,255,255,0.06)] hover:text-[#F2F4F5]"
                          }\`}
                        >
                          <item.icon className={\`w-[18px] h-[18px] shrink-0 transition-colors duration-200 \${pathname === item.href ? "text-[#405462]" : "text-[#AEBBC3] group-hover:text-[#D5DDE1]"}\`} />
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
        )}`;

content = content.replace(
  /\{\/\* Mobile Navigation Drawer \*\/\}.*?(?=<main)/s,
  mobileSidebar + '\n\n'
);

fs.writeFileSync(layoutPath, content, 'utf8');
console.log('Sidebar updated');
