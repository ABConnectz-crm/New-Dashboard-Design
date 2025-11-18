"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { Sparkline, TrendIndicator } from './Sparkline';
import { Tooltip } from './Tooltip';

interface EnhancedStatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  iconColor?: string;
  trend?: 'up' | 'down' | 'neutral';
  subtitle?: string;
  sparklineData?: number[];
  tooltip?: string;
  loading?: boolean;
}

export function EnhancedStatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
  trend,
  subtitle,
  sparklineData,
  tooltip,
  loading = false,
}: EnhancedStatsCardProps) {
  const { theme } = useTheme();

  const cardStyles = {
    pastel: 'bg-white shadow-soft hover:shadow-soft-lg hover-lift',
    analytics: 'bg-analytics-card shadow-soft hover-lift',
    minimal: 'bg-white border border-minimal-gray-dark hover:border-minimal-blue/30 hover-lift',
  };

  const iconBgColors = {
    purple: 'bg-pastel-purple/10 text-pastel-purple',
    yellow: 'bg-pastel-yellow/20 text-yellow-600',
    sky: 'bg-pastel-sky/20 text-sky-600',
    orange: 'bg-pastel-orange/20 text-orange-600',
    pink: 'bg-pink-500/10 text-pink-600',
    green: 'bg-green-500/10 text-green-600',
    red: 'bg-red-500/10 text-red-600',
  };

  const sparklineColors = {
    purple: '#6A4DF4',
    yellow: '#FDCB50',
    sky: '#58C6F5',
    orange: '#FF9770',
    pink: '#FF8BA0',
    green: '#10B981',
    red: '#EF4444',
  };

  if (loading) {
    return (
      <div className={cn('rounded-2xl p-6 transition-smooth', cardStyles[theme])}>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-8 bg-gray-200 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
    );
  }

  const getTrendColor = () => {
    if (trend === 'up') return 'text-green-500';
    if (trend === 'down') return 'text-red-500';
    return 'text-gray-500';
  };

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-smooth cursor-pointer group relative overflow-hidden',
      'animate-fadeIn',
      cardStyles[theme]
    )}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <p className={cn(
                'text-sm font-medium',
                theme === 'pastel' && 'text-pastel-text-light',
                theme === 'analytics' && 'text-analytics-text-light',
                theme === 'minimal' && 'text-minimal-text-light'
              )}>
                {title}
              </p>
              {tooltip && <Tooltip content={tooltip} />}
            </div>

            <h3 className={cn(
              'text-3xl font-bold mb-1 transition-colors',
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
              <div className="flex items-center gap-2 mt-2">
                <TrendIndicator value={change} trend={change >= 0 ? 'up' : 'down'} />
                <span className="text-xs opacity-70">vs last period</span>
              </div>
            )}
          </div>

          <div className={cn(
            'w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110',
            iconColor ? iconBgColors[iconColor as keyof typeof iconBgColors] : 'bg-gray-100'
          )}>
            <Icon size={28} strokeWidth={2} />
          </div>
        </div>

        {/* Sparkline */}
        {sparklineData && sparklineData.length > 1 && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <Sparkline
              data={sparklineData}
              color={sparklineColors[iconColor as keyof typeof sparklineColors] || '#6A4DF4'}
              height={32}
            />
          </div>
        )}
      </div>
    </div>
  );
}
