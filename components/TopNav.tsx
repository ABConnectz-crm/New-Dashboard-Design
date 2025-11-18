"use client";

import React from 'react';
import { Search, Bell, Settings, ChevronDown, Palette } from 'lucide-react';
import { useTheme, ThemeType } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export function TopNav() {
  const { theme, setTheme } = useTheme();
  const [showThemeSelector, setShowThemeSelector] = React.useState(false);

  const navStyles = {
    pastel: 'bg-pastel-background border-pastel-card/20',
    analytics: 'bg-analytics-background border-analytics-card/20',
    minimal: 'bg-minimal-background border-minimal-gray-dark',
  };

  const inputStyles = {
    pastel: 'bg-white/60 text-pastel-text placeholder:text-pastel-text-light focus:bg-white',
    analytics: 'bg-analytics-card text-white placeholder:text-analytics-text-light',
    minimal: 'bg-minimal-card text-minimal-text placeholder:text-minimal-text-light',
  };

  const buttonStyles = {
    pastel: 'bg-white/60 text-pastel-text hover:bg-white',
    analytics: 'bg-analytics-card text-white hover:bg-analytics-dark-light',
    minimal: 'bg-minimal-card text-minimal-text hover:bg-minimal-gray-dark',
  };

  const themes: { value: ThemeType; label: string; colors: string }[] = [
    { value: 'pastel', label: 'Modern Pastel', colors: 'from-pastel-purple to-pastel-yellow' },
    { value: 'analytics', label: 'Gradient Analytics', colors: 'from-analytics-pink to-analytics-orange' },
    { value: 'minimal', label: 'Minimal Enterprise', colors: 'from-minimal-blue to-minimal-purple' },
  ];

  return (
    <div className={cn(
      'sticky top-0 z-40 flex items-center justify-between px-8 py-4 border-b transition-smooth',
      navStyles[theme]
    )}>
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search leads, campaigns, tasks..."
            className={cn(
              'w-full pl-12 pr-4 py-3 rounded-2xl outline-none transition-smooth',
              inputStyles[theme]
            )}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Theme Selector */}
        <div className="relative">
          <button
            onClick={() => setShowThemeSelector(!showThemeSelector)}
            className={cn(
              'p-3 rounded-xl transition-smooth',
              buttonStyles[theme]
            )}
            title="Change Theme"
          >
            <Palette size={20} />
          </button>

          {showThemeSelector && (
            <div className={cn(
              'absolute right-0 mt-2 w-64 rounded-2xl shadow-soft-lg p-2',
              theme === 'pastel' && 'bg-white',
              theme === 'analytics' && 'bg-analytics-card',
              theme === 'minimal' && 'bg-white border border-minimal-gray-dark'
            )}>
              <div className="text-sm font-semibold mb-2 px-3 py-2">
                Choose Theme
              </div>
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => {
                    setTheme(t.value);
                    setShowThemeSelector(false);
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-smooth text-left',
                    theme === t.value && 'bg-pastel-purple/10',
                    'hover:bg-gray-100'
                  )}
                >
                  <div className={cn(
                    'w-8 h-8 rounded-lg bg-gradient-to-br',
                    t.colors
                  )} />
                  <span className="text-sm font-medium">{t.label}</span>
                  {theme === t.value && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-pastel-purple" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Settings Button */}
        <button
          className={cn(
            'p-3 rounded-xl transition-smooth',
            buttonStyles[theme]
          )}
          title="Settings"
        >
          <Settings size={20} />
        </button>

        {/* Notifications */}
        <button
          className={cn(
            'p-3 rounded-xl transition-smooth relative',
            buttonStyles[theme]
          )}
          title="Notifications"
        >
          <Bell size={20} />
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Profile */}
        <div className={cn(
          'flex items-center gap-3 pl-4 pr-3 py-2 rounded-2xl cursor-pointer transition-smooth',
          buttonStyles[theme]
        )}>
          <div className="text-right">
            <div className="text-sm font-semibold">Scarlett</div>
            <div className="text-xs opacity-70">Admin</div>
          </div>
          <div className={cn(
            'w-10 h-10 rounded-xl flex items-center justify-center font-semibold',
            theme === 'pastel' && 'bg-gradient-to-br from-pastel-purple to-pastel-sky text-white',
            theme === 'analytics' && 'bg-gradient-pink-orange text-white',
            theme === 'minimal' && 'bg-minimal-blue text-white'
          )}>
            SC
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
