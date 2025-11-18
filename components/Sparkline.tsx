"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SparklineProps {
  data: number[];
  color?: string;
  showDots?: boolean;
  height?: number;
  className?: string;
}

export function Sparkline({
  data,
  color = '#6A4DF4',
  showDots = false,
  height = 40,
  className
}: SparklineProps) {
  if (data.length < 2) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = height - ((value - min) / range) * height;
    return { x, y };
  });

  // Create SVG path
  const pathData = points.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }
    return `${path} L ${point.x} ${point.y}`;
  }, '');

  // Create area fill path
  const areaData = `${pathData} L 100 ${height} L 0 ${height} Z`;

  return (
    <div className={cn('relative', className)}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {/* Area fill with gradient */}
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Fill area */}
        <path
          d={areaData}
          fill={`url(#gradient-${color})`}
          className="transition-all duration-500"
        />

        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-500"
        />

        {/* Dots */}
        {showDots && points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="2"
            fill={color}
            className="transition-all duration-300 hover:r-3"
          />
        ))}

        {/* Last point highlight */}
        <circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r="3"
          fill={color}
          className="animate-pulse"
        />
      </svg>
    </div>
  );
}

// Mini trend indicator
interface TrendIndicatorProps {
  value: number;
  trend: 'up' | 'down';
  className?: string;
}

export function TrendIndicator({ value, trend, className }: TrendIndicatorProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1 text-xs font-semibold',
      trend === 'up' ? 'text-green-600' : 'text-red-600',
      className
    )}>
      {trend === 'up' ? '↑' : '↓'}
      {Math.abs(value).toFixed(1)}%
    </span>
  );
}
