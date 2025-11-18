"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { leadAcquisitionData } from '@/lib/demo-data';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Users } from 'lucide-react';

export function LeadOverview() {
  const { theme } = useTheme();

  const cardStyles = {
    pastel: 'bg-white shadow-soft',
    analytics: 'bg-analytics-card',
    minimal: 'bg-white border border-minimal-gray-dark',
  };

  const textStyles = {
    pastel: 'text-pastel-text',
    analytics: 'text-white',
    minimal: 'text-minimal-text',
  };

  const chartColors = {
    pastel: {
      leads: '#6A4DF4',
      converted: '#FDCB50',
      grid: '#E5E7EB',
      text: '#6B7280',
    },
    analytics: {
      leads: '#FF6B9D',
      converted: '#60A5FA',
      grid: '#374151',
      text: '#9CA3AF',
    },
    minimal: {
      leads: '#4F46E5',
      converted: '#10B981',
      grid: '#E5E7EB',
      text: '#6B7280',
    },
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={cn(
          'rounded-xl p-4 shadow-soft-lg',
          theme === 'pastel' && 'bg-white',
          theme === 'analytics' && 'bg-analytics-dark',
          theme === 'minimal' && 'bg-white border border-minimal-gray-dark'
        )}>
          <p className={cn('font-semibold mb-2', textStyles[theme])}>{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-bold">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-smooth',
      cardStyles[theme]
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={cn('text-lg font-bold flex items-center gap-2', textStyles[theme])}>
            <Users size={22} className="text-pastel-purple" />
            Lead Acquisition Trends
          </h3>
          <p className="text-sm opacity-70 mt-1">
            Lead generation and conversion over time
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className={cn(
            'px-4 py-2 rounded-xl text-sm font-semibold transition-smooth',
            theme === 'pastel' && 'bg-pastel-background text-pastel-text',
            theme === 'analytics' && 'bg-analytics-dark text-white',
            theme === 'minimal' && 'bg-minimal-gray text-minimal-text'
          )}>
            7 Days
          </button>
          <button className={cn(
            'px-4 py-2 rounded-xl text-sm font-semibold transition-smooth',
            theme === 'pastel' && 'bg-pastel-purple text-white',
            theme === 'analytics' && 'bg-gradient-pink-orange text-white',
            theme === 'minimal' && 'bg-minimal-blue text-white'
          )}>
            30 Days
          </button>
          <button className={cn(
            'px-4 py-2 rounded-xl text-sm font-semibold transition-smooth',
            theme === 'pastel' && 'bg-pastel-background text-pastel-text',
            theme === 'analytics' && 'bg-analytics-dark text-white',
            theme === 'minimal' && 'bg-minimal-gray text-minimal-text'
          )}>
            90 Days
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={leadAcquisitionData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColors[theme].leads} stopOpacity={0.3} />
                <stop offset="95%" stopColor={chartColors[theme].leads} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorConverted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColors[theme].converted} stopOpacity={0.3} />
                <stop offset="95%" stopColor={chartColors[theme].converted} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={chartColors[theme].grid}
              vertical={false}
            />
            <XAxis
              dataKey="month"
              stroke={chartColors[theme].text}
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke={chartColors[theme].text}
              style={{ fontSize: '12px' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: '14px', fontWeight: 600 }}
              iconType="circle"
            />
            <Area
              type="monotone"
              dataKey="leads"
              name="Total Leads"
              stroke={chartColors[theme].leads}
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorLeads)"
            />
            <Area
              type="monotone"
              dataKey="converted"
              name="Converted"
              stroke={chartColors[theme].converted}
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorConverted)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className={cn(
        'grid grid-cols-3 gap-4 mt-6 pt-6 border-t',
        theme === 'pastel' && 'border-pastel-background',
        theme === 'analytics' && 'border-analytics-dark',
        theme === 'minimal' && 'border-minimal-gray-dark'
      )}>
        <div>
          <p className="text-xs opacity-70 mb-1">Total This Month</p>
          <p className={cn('text-2xl font-bold', textStyles[theme])}>
            {leadAcquisitionData[leadAcquisitionData.length - 1].leads}
          </p>
          <p className="text-xs text-green-600 font-semibold mt-1">
            <TrendingUp size={12} className="inline mr-1" />
            +16% from last month
          </p>
        </div>
        <div>
          <p className="text-xs opacity-70 mb-1">Conversions</p>
          <p className={cn('text-2xl font-bold', textStyles[theme])}>
            {leadAcquisitionData[leadAcquisitionData.length - 1].converted}
          </p>
          <p className="text-xs text-green-600 font-semibold mt-1">
            <TrendingUp size={12} className="inline mr-1" />
            +20% conversion rate
          </p>
        </div>
        <div>
          <p className="text-xs opacity-70 mb-1">Avg per Day</p>
          <p className={cn('text-2xl font-bold', textStyles[theme])}>
            {Math.round(leadAcquisitionData[leadAcquisitionData.length - 1].leads / 30)}
          </p>
          <p className="text-xs opacity-70 mt-1">Based on 30-day avg</p>
        </div>
      </div>
    </div>
  );
}
