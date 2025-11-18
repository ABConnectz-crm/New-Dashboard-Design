"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave';
}

export function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse'
}: SkeletonProps) {
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
  };

  return (
    <div
      className={cn(
        'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200',
        'bg-[length:200%_100%]',
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={{
        width: width || '100%',
        height: height || (variant === 'text' ? '1rem' : '100%'),
      }}
    />
  );
}

// Pre-built skeleton components
export function StatsCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-3">
          <Skeleton width="60%" height="12px" />
          <Skeleton width="40%" height="32px" />
          <Skeleton width="50%" height="12px" />
        </div>
        <Skeleton variant="circular" width="56px" height="56px" />
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton width="30%" height="20px" />
          <Skeleton width="20%" height="12px" />
        </div>
        <Skeleton height="300px" />
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft">
      <Skeleton width="40%" height="24px" className="mb-6" />
      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton variant="circular" width="40px" height="40px" />
            <div className="flex-1 space-y-2">
              <Skeleton width="70%" height="16px" />
              <Skeleton width="50%" height="12px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Skeleton variant="circular" width="48px" height="48px" />
          <div className="flex-1 space-y-2">
            <Skeleton width="60%" height="16px" />
            <Skeleton width="40%" height="12px" />
          </div>
        </div>
        <Skeleton height="120px" />
        <div className="grid grid-cols-2 gap-3">
          <Skeleton height="60px" />
          <Skeleton height="60px" />
        </div>
      </div>
    </div>
  );
}
