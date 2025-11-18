"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { demoTeam } from '@/lib/demo-data';
import { Users, TrendingUp, Phone, MessageSquare, CheckCircle2, Award } from 'lucide-react';

export function TeamActivity() {
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

  // Sort by conversion rate
  const sortedTeam = [...demoTeam].sort((a, b) => b.stats.conversionRate - a.stats.conversionRate);
  const topPerformer = sortedTeam[0];

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-smooth',
      cardStyles[theme]
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={cn('text-lg font-bold flex items-center gap-2', textStyles[theme])}>
            <Users size={22} className="text-pastel-sky" />
            Team Performance
          </h3>
          <p className="text-sm opacity-70 mt-1">
            This month's activity overview
          </p>
        </div>
      </div>

      {/* Top Performer Highlight */}
      <div className={cn(
        'mb-6 p-4 rounded-xl relative overflow-hidden',
        theme === 'pastel' && 'bg-gradient-to-br from-pastel-yellow/20 to-pastel-orange/20',
        theme === 'analytics' && 'bg-gradient-pink-orange/20',
        theme === 'minimal' && 'bg-gradient-blue-purple/10'
      )}>
        <div className="flex items-center gap-3">
          <div className={cn(
            'w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl',
            theme === 'pastel' && 'bg-gradient-to-br from-pastel-yellow to-pastel-orange text-white',
            theme === 'analytics' && 'bg-gradient-pink-orange text-white',
            theme === 'minimal' && 'bg-gradient-blue-purple text-white'
          )}>
            {topPerformer.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Award size={16} className="text-yellow-500" />
              <span className="text-xs font-semibold text-yellow-600">Top Performer</span>
            </div>
            <h4 className={cn('font-bold', textStyles[theme])}>
              {topPerformer.name}
            </h4>
            <p className="text-sm opacity-70">{topPerformer.role}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">
              {topPerformer.stats.conversionRate}%
            </p>
            <p className="text-xs opacity-70">Conv. Rate</p>
          </div>
        </div>
      </div>

      {/* Team Members List */}
      <div className="space-y-3">
        {sortedTeam.map((member) => (
          <div
            key={member.id}
            className={cn(
              'p-4 rounded-xl transition-smooth cursor-pointer hover:scale-[1.01]',
              theme === 'pastel' && 'bg-pastel-background hover:bg-pastel-background/70',
              theme === 'analytics' && 'bg-analytics-dark hover:bg-analytics-dark-light',
              theme === 'minimal' && 'bg-minimal-gray hover:bg-minimal-gray-dark'
            )}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center font-semibold',
                theme === 'pastel' && 'bg-pastel-purple/10 text-pastel-purple',
                theme === 'analytics' && 'bg-analytics-pink/20 text-analytics-pink',
                theme === 'minimal' && 'bg-minimal-blue/10 text-minimal-blue'
              )}>
                {member.avatar}
              </div>
              <div className="flex-1">
                <h4 className={cn('font-bold text-sm', textStyles[theme])}>
                  {member.name}
                </h4>
                <p className="text-xs opacity-70">{member.role}</p>
              </div>
              <div className={cn(
                'px-3 py-1 rounded-lg text-sm font-bold',
                member.stats.conversionRate >= 24
                  ? 'bg-green-500/10 text-green-600'
                  : member.stats.conversionRate >= 20
                  ? 'bg-yellow-500/10 text-yellow-600'
                  : 'bg-gray-500/10 text-gray-600'
              )}>
                {member.stats.conversionRate}%
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users size={12} className="opacity-50" />
                </div>
                <p className={cn('text-sm font-bold', textStyles[theme])}>
                  {member.stats.leadsHandled}
                </p>
                <p className="text-xs opacity-70">Leads</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Phone size={12} className="opacity-50" />
                </div>
                <p className={cn('text-sm font-bold', textStyles[theme])}>
                  {member.stats.callsMade}
                </p>
                <p className="text-xs opacity-70">Calls</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MessageSquare size={12} className="opacity-50" />
                </div>
                <p className={cn('text-sm font-bold', textStyles[theme])}>
                  {member.stats.messagesSent}
                </p>
                <p className="text-xs opacity-70">Messages</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <CheckCircle2 size={12} className="opacity-50" />
                </div>
                <p className={cn('text-sm font-bold', textStyles[theme])}>
                  {member.stats.tasksCompleted}
                </p>
                <p className="text-xs opacity-70">Tasks</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
