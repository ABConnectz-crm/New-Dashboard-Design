"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { Sun, Cloud, Sparkles } from 'lucide-react';

export function WelcomeBanner() {
  const { theme } = useTheme();

  const bannerStyles = {
    pastel: 'bg-gradient-to-br from-pastel-yellow/30 via-pastel-orange/20 to-pastel-coral/30',
    analytics: 'bg-gradient-to-br from-analytics-pink/20 to-analytics-orange/20',
    minimal: 'bg-gradient-to-br from-minimal-blue/10 to-minimal-purple/10',
  };

  const textStyles = {
    pastel: 'text-pastel-text',
    analytics: 'text-white',
    minimal: 'text-minimal-text',
  };

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? 'Good Morning' : currentHour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className={cn(
      'rounded-2xl p-8 transition-smooth relative overflow-hidden',
      bannerStyles[theme]
    )}>
      {/* Background decoration */}
      <div className="absolute top-4 right-8 opacity-20">
        <Sparkles size={80} className="text-yellow-500" />
      </div>
      <div className="absolute bottom-4 right-24 opacity-10">
        <Cloud size={100} className="text-blue-500" />
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex-1">
          <h1 className={cn('text-3xl font-bold mb-2', textStyles[theme])}>
            {greeting}, Scarlett!
          </h1>
          <p className="text-lg opacity-80 mb-4">
            Welcome back! Here's what's happening with your leads today.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Sun size={20} className="text-yellow-600" />
              <div>
                <p className="text-sm opacity-70">Temperature</p>
                <p className="font-semibold">25°C</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Cloud size={20} className="text-blue-600" />
              <div>
                <p className="text-sm opacity-70">Weather</p>
                <p className="font-semibold">Partly Cloudy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration placeholder - you can add an SVG or image here */}
        <div className={cn(
          'hidden lg:block w-64 h-48 rounded-2xl',
          theme === 'pastel' && 'bg-white/30',
          theme === 'analytics' && 'bg-white/10',
          theme === 'minimal' && 'bg-white/50'
        )}>
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center opacity-60">
              <Sparkles size={48} className="mx-auto mb-2" />
              <p className="text-sm font-medium">Illustration Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
