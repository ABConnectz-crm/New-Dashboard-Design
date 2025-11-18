"use client";

import {
  LayoutDashboard,
  Users,
  Megaphone,
  CheckSquare,
  Calendar,
  BarChart3,
  Settings,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/",
    active: true,
  },
  {
    icon: Users,
    label: "Leads",
    href: "/leads",
    badge: "1,247",
  },
  {
    icon: Megaphone,
    label: "Campaigns",
    href: "/campaigns",
    badge: "8",
  },
  {
    icon: CheckSquare,
    label: "Tasks",
    href: "/tasks",
    badge: "15",
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/calendar",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    href: "/analytics",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-72 bg-card border-r border-border/50
          transition-transform duration-300 ease-in-out
          lg:sticky lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                LM
              </div>
              <div>
                <div className="font-bold text-lg">LeadFlow</div>
                <div className="text-xs text-muted-foreground">CRM Dashboard</div>
              </div>
            </div>
            <button onClick={onClose} className="lg:hidden p-2 hover:bg-muted rounded-lg">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-2xl transition-all
                    ${
                      item.active
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span className="flex-1 font-medium">{item.label}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border/50">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <div className="text-sm font-semibold mb-1">Upgrade to Pro</div>
              <div className="text-xs text-muted-foreground mb-3">
                Unlock advanced features and analytics
              </div>
              <button className="w-full py-2 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
