"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { pipelineStats } from '@/lib/demo-data';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function PipelineFunnel() {
  const { theme } = useTheme();

  const stages = [
    { name: 'New', count: pipelineStats.new, color: 'bg-blue-500', percentage: 100 },
    { name: 'Contacted', count: pipelineStats.contacted, color: 'bg-purple-500', percentage: 77 },
    { name: 'Qualified', count: pipelineStats.qualified, color: 'bg-yellow-500', percentage: 36 },
    { name: 'Converted', count: pipelineStats.converted, color: 'bg-green-500', percentage: 21 },
  ];

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

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-smooth',
      cardStyles[theme]
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={cn('text-lg font-bold', textStyles[theme])}>
            Sales Pipeline
          </h3>
          <p className="text-sm opacity-70 mt-1">
            Lead progression through stages
          </p>
        </div>
        <div className={cn(
          'px-4 py-2 rounded-xl text-sm font-semibold',
          theme === 'pastel' && 'bg-green-500/10 text-green-600',
          theme === 'analytics' && 'bg-green-500/20 text-green-400',
          theme === 'minimal' && 'bg-green-500/10 text-green-600'
        )}>
          <TrendingUp size={16} className="inline mr-1" />
          21% Conv. Rate
        </div>
      </div>

      {/* Funnel Stages */}
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={stage.name} className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={cn('w-3 h-3 rounded-full', stage.color)} />
                <span className={cn('font-semibold', textStyles[theme])}>
                  {stage.name}
                </span>
              </div>
              <span className={cn('text-sm font-bold', textStyles[theme])}>
                {stage.count}
              </span>
            </div>

            {/* Progress Bar */}
            <div className={cn(
              'h-12 rounded-xl relative overflow-hidden',
              theme === 'pastel' && 'bg-pastel-background',
              theme === 'analytics' && 'bg-analytics-dark',
              theme === 'minimal' && 'bg-minimal-gray'
            )}>
              <div
                className={cn(
                  'h-full rounded-xl transition-all duration-500',
                  stage.color,
                  'flex items-center justify-end px-4'
                )}
                style={{ width: `${stage.percentage}%` }}
              >
                <span className="text-white text-sm font-semibold">
                  {stage.percentage}%
                </span>
              </div>
            </div>

            {/* Arrow between stages */}
            {index < stages.length - 1 && (
              <div className="flex justify-center my-2">
                <ArrowRight size={16} className="opacity-40" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className={cn(
        'grid grid-cols-2 gap-4 mt-6 pt-6 border-t',
        theme === 'pastel' && 'border-pastel-background',
        theme === 'analytics' && 'border-analytics-dark',
        theme === 'minimal' && 'border-minimal-gray-dark'
      )}>
        <div>
          <p className="text-xs opacity-70 mb-1">Total Pipeline Value</p>
          <p className={cn('text-xl font-bold', textStyles[theme])}>
            ${(pipelineStats.totalValue / 1000000).toFixed(2)}M
          </p>
        </div>
        <div>
          <p className="text-xs opacity-70 mb-1">Avg Deal Size</p>
          <p className={cn('text-xl font-bold', textStyles[theme])}>
            ${(pipelineStats.avgDealSize / 1000).toFixed(0)}k
          </p>
        </div>
      </div>
    </div>
  );
}
