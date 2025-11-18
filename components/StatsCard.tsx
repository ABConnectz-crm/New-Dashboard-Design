"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  iconColor?: string;
  trend?: 'up' | 'down' | 'neutral';
  subtitle?: string;
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
  trend,
  subtitle,
}: StatsCardProps) {
  const { theme } = useTheme();

  const cardStyles = {
    pastel: 'bg-white shadow-soft hover:shadow-soft-lg',
    analytics: 'bg-analytics-card shadow-soft',
    minimal: 'bg-white border border-minimal-gray-dark hover:border-minimal-blue/30',
  };

  const iconBgColors = {
    purple: 'bg-pastel-purple/10 text-pastel-purple',
    yellow: 'bg-pastel-yellow/20 text-yellow-600',
    sky: 'bg-pastel-sky/20 text-sky-600',
    orange: 'bg-pastel-orange/20 text-orange-600',
    pink: 'bg-pink-500/10 text-pink-600',
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-green-500';
    if (trend === 'down') return 'text-red-500';
    return 'text-gray-500';
  };

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-smooth cursor-pointer',
      cardStyles[theme]
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={cn(
            'text-sm font-medium mb-2',
            theme === 'pastel' && 'text-pastel-text-light',
            theme === 'analytics' && 'text-analytics-text-light',
            theme === 'minimal' && 'text-minimal-text-light'
          )}>
            {title}
          </p>
          <h3 className={cn(
            'text-3xl font-bold mb-1',
            theme === 'pastel' && 'text-pastel-text',
            theme === 'analytics' && 'text-white',
            theme === 'minimal' && 'text-minimal-text'
          )}>
            {value}
          </h3>
          {subtitle && (
            <p className="text-xs opacity-70 mt-1">{subtitle}</p>
          )}
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              <span className={cn('text-sm font-semibold', getTrendColor())}>
                {change > 0 ? '+' : ''}{change}%
              </span>
              <span className="text-xs opacity-70">vs last week</span>
            </div>
          )}
        </div>

        <div className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center',
          iconColor ? iconBgColors[iconColor as keyof typeof iconBgColors] : 'bg-gray-100'
        )}>
          <Icon size={28} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
