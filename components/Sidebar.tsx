"use client";

import React from 'react';
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Calendar,
  BarChart3,
  Settings,
  Zap,
  Target,
  Mail,
  PhoneCall
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Leads', active: false },
  { icon: Target, label: 'Pipeline', active: false },
  { icon: Mail, label: 'Campaigns', active: false },
  { icon: Zap, label: 'Automation', active: false },
  { icon: Calendar, label: 'Calendar', active: false },
  { icon: PhoneCall, label: 'Tasks', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar({ className }: SidebarProps) {
  const { theme } = useTheme();

  const sidebarStyles = {
    pastel: 'bg-gradient-to-b from-pastel-purple to-pastel-purple-dark',
    analytics: 'bg-analytics-dark',
    minimal: 'bg-white border-r border-gray-200',
  };

  const iconStyles = {
    pastel: 'text-white/90 hover:text-white hover:bg-white/20',
    analytics: 'text-white/70 hover:text-white hover:bg-white/10',
    minimal: 'text-minimal-text-light hover:text-minimal-blue hover:bg-minimal-gray',
  };

  const activeIconStyles = {
    pastel: 'text-white bg-white/30',
    analytics: 'text-white bg-gradient-pink-orange',
    minimal: 'text-minimal-blue bg-minimal-blue/10',
  };

  return (
    <div className={cn(
      'fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-8 transition-smooth',
      sidebarStyles[theme],
      className
    )}>
      {/* Logo */}
      <div className="mb-12">
        <div className={cn(
          'w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl',
          theme === 'pastel' && 'bg-white/20 text-white',
          theme === 'analytics' && 'bg-white/10 text-white',
          theme === 'minimal' && 'bg-minimal-blue text-white'
        )}>
          E
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-4 w-full px-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center transition-smooth relative group',
                item.active ? activeIconStyles[theme] : iconStyles[theme]
              )}
              title={item.label}
            >
              <Icon size={22} strokeWidth={2} />

              {/* Tooltip */}
              <div className={cn(
                'absolute left-16 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap',
                'opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50',
                theme === 'pastel' && 'bg-pastel-purple text-white',
                theme === 'analytics' && 'bg-analytics-card text-white',
                theme === 'minimal' && 'bg-gray-800 text-white'
              )}>
                {item.label}
              </div>
            </button>
          );
        })}
      </nav>

      {/* User Avatar at Bottom */}
      <div className={cn(
        'w-12 h-12 rounded-xl flex items-center justify-center font-semibold',
        theme === 'pastel' && 'bg-white/20 text-white',
        theme === 'analytics' && 'bg-white/10 text-white',
        theme === 'minimal' && 'bg-minimal-gray text-minimal-blue'
      )}>
        SC
      </div>
    </div>
  );
}
