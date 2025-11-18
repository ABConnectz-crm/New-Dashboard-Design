"use client";

import { Search, Bell, Settings, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: "purple", name: "Purple", emoji: "🟣" },
    { id: "blue", name: "Blue/Teal", emoji: "🔵" },
    { id: "dark", name: "Dark Mode", emoji: "🌙" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-muted rounded-xl transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
            LM
          </div>
          <span className="hidden md:block font-bold text-lg text-foreground">
            LeadFlow
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search leads, campaigns, tasks..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-muted border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <div className="hidden md:flex items-center gap-2 p-1 bg-muted rounded-xl border border-border/50">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  theme === t.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
                title={t.name}
              >
                {t.emoji}
              </button>
            ))}
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-muted rounded-xl transition-colors"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 hover:bg-muted rounded-xl p-2 transition-colors"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback style={{ background: "var(--primary)", color: "white" }}>
                  SM
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <div className="text-sm font-medium">Sarah Mitchell</div>
                <div className="text-xs text-muted-foreground">Admin</div>
              </div>
              <ChevronDown className="hidden md:block h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
