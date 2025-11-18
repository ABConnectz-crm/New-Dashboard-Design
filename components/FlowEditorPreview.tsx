"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { demoFlows } from '@/lib/demo-data';
import { Zap, Play, Pause, GitBranch, Clock, TrendingUp, ChevronRight } from 'lucide-react';

export function FlowEditorPreview() {
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

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-smooth',
      cardStyles[theme]
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={cn('text-lg font-bold flex items-center gap-2', textStyles[theme])}>
            <Zap size={22} className="text-yellow-500" />
            Active Automations
          </h3>
          <p className="text-sm opacity-70 mt-1">
            Flow-based campaigns & drip sequences
          </p>
        </div>
        <button className={cn(
          'px-4 py-2 rounded-xl text-sm font-semibold transition-smooth',
          theme === 'pastel' && 'bg-pastel-purple text-white hover:bg-pastel-purple-dark',
          theme === 'analytics' && 'bg-gradient-pink-orange text-white',
          theme === 'minimal' && 'bg-minimal-blue text-white hover:bg-minimal-blue-light'
        )}>
          Create Flow
        </button>
      </div>

      {/* Flows List */}
      <div className="space-y-3">
        {demoFlows.map((flow) => (
          <div
            key={flow.id}
            className={cn(
              'p-4 rounded-xl transition-smooth cursor-pointer',
              theme === 'pastel' && 'bg-pastel-background hover:bg-pastel-background/70',
              theme === 'analytics' && 'bg-analytics-dark hover:bg-analytics-dark-light',
              theme === 'minimal' && 'bg-minimal-gray hover:bg-minimal-gray-dark'
            )}
          >
            {/* Flow Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3 flex-1">
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center',
                  flow.status === 'active'
                    ? 'bg-green-500/10 text-green-600'
                    : 'bg-yellow-500/10 text-yellow-600'
                )}>
                  <GitBranch size={20} />
                </div>
                <div className="flex-1">
                  <h4 className={cn('font-bold text-sm mb-1', textStyles[theme])}>
                    {flow.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs">
                    <span className={cn(
                      'px-2 py-1 rounded-lg font-medium',
                      flow.status === 'active'
                        ? 'bg-green-500/10 text-green-600'
                        : 'bg-yellow-500/10 text-yellow-600'
                    )}>
                      {flow.status === 'active' ? <Play size={10} className="inline mr-1" /> : <Pause size={10} className="inline mr-1" />}
                      {flow.status.charAt(0).toUpperCase() + flow.status.slice(1)}
                    </span>
                    <span className="opacity-70">{flow.nodes} nodes</span>
                  </div>
                </div>
              </div>

              <ChevronRight size={20} className="opacity-40" />
            </div>

            {/* Flow Stats */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div>
                <p className="text-xs opacity-70 mb-0.5">Total Runs</p>
                <p className={cn('text-sm font-bold', textStyles[theme])}>
                  {flow.stats.totalRuns.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs opacity-70 mb-0.5">Success Rate</p>
                <p className="text-sm font-bold text-green-600">
                  <TrendingUp size={12} className="inline mr-0.5" />
                  {flow.stats.successRate}%
                </p>
              </div>
              <div>
                <p className="text-xs opacity-70 mb-0.5">Avg Time</p>
                <p className={cn('text-sm font-bold', textStyles[theme])}>
                  <Clock size={12} className="inline mr-0.5" />
                  {flow.stats.avgCompletionTime}
                </p>
              </div>
            </div>

            {/* Triggers */}
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs opacity-70">Triggers:</span>
                {flow.triggers.map((trigger, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-lg bg-purple-500/10 text-purple-600 font-medium"
                  >
                    {trigger}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className={cn(
        'mt-4 pt-4 border-t flex items-center justify-between',
        theme === 'pastel' && 'border-pastel-background',
        theme === 'analytics' && 'border-analytics-dark',
        theme === 'minimal' && 'border-minimal-gray-dark'
      )}>
        <span className="text-sm opacity-70">
          {demoFlows.filter(f => f.status === 'active').length} active flows
        </span>
        <button className="text-sm font-semibold text-pastel-purple hover:underline">
          View All Automations →
        </button>
      </div>
    </div>
  );
}
