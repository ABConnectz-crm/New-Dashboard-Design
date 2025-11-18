"use client";

import React, { useState } from 'react';
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
  PhoneCall,
  X,
  Menu
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="mb-8 md:mb-12">
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
      <nav className="flex-1 flex flex-col gap-3 md:gap-4 w-full px-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center transition-smooth relative group',
                item.active ? activeIconStyles[theme] : iconStyles[theme]
              )}
              title={item.label}
            >
              <Icon size={22} strokeWidth={2} />

              {/* Tooltip - Desktop only */}
              <div className={cn(
                'hidden md:block absolute left-16 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap',
                'opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50',
                theme === 'pastel' && 'bg-pastel-purple text-white',
                theme === 'analytics' && 'bg-analytics-card text-white',
                theme === 'minimal' && 'bg-gray-800 text-white'
              )}>
                {item.label}
              </div>

              {/* Label - Mobile only */}
              <span className="md:hidden absolute left-16 text-sm font-medium whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* User Avatar at Bottom */}
      <div className={cn(
        'w-12 h-12 rounded-xl flex items-center justify-center font-semibold mt-4',
        theme === 'pastel' && 'bg-white/20 text-white',
        theme === 'analytics' && 'bg-white/10 text-white',
        theme === 'minimal' && 'bg-minimal-gray text-minimal-blue'
      )}>
        SC
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button - Fixed top left */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={cn(
          'md:hidden fixed top-4 left-4 z-50 p-3 rounded-xl shadow-lg transition-smooth',
          theme === 'pastel' && 'bg-pastel-purple text-white',
          theme === 'analytics' && 'bg-analytics-dark text-white',
          theme === 'minimal' && 'bg-white text-minimal-blue border border-minimal-gray-dark'
        )}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Slide in on mobile, fixed on desktop */}
      <div
        className={cn(
          // Mobile: Slide in from left
          'fixed left-0 top-0 h-screen w-64 md:w-20 flex flex-col items-center py-8 transition-all duration-300 z-40',
          // Mobile positioning
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          // Desktop: Always visible
          sidebarStyles[theme],
          className
        )}
      >
        <SidebarContent />
      </div>
    </>
  );
}
