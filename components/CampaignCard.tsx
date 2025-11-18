"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { Campaign } from '@/lib/demo-data';
import { Mail, MessageSquare, Pause, Play, MoreVertical, TrendingUp } from 'lucide-react';

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const { theme } = useTheme();

  const cardStyles = {
    pastel: 'bg-white shadow-soft hover:shadow-soft-lg',
    analytics: 'bg-analytics-card',
    minimal: 'bg-white border border-minimal-gray-dark hover:border-minimal-blue/30',
  };

  const textStyles = {
    pastel: 'text-pastel-text',
    analytics: 'text-white',
    minimal: 'text-minimal-text',
  };

  const statusColors = {
    draft: 'bg-gray-500/10 text-gray-600',
    scheduled: 'bg-blue-500/10 text-blue-600',
    live: 'bg-green-500/10 text-green-600',
    paused: 'bg-yellow-500/10 text-yellow-600',
    completed: 'bg-purple-500/10 text-purple-600',
  };

  const getOpenRate = () => {
    if (campaign.stats.opened && campaign.stats.delivered) {
      return ((campaign.stats.opened / campaign.stats.delivered) * 100).toFixed(1);
    }
    return null;
  };

  const getReplyRate = () => {
    if (campaign.stats.replied && campaign.stats.delivered) {
      return ((campaign.stats.replied / campaign.stats.delivered) * 100).toFixed(1);
    }
    return null;
  };

  return (
    <div className={cn(
      'rounded-2xl p-5 transition-smooth',
      cardStyles[theme]
    )}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center',
            campaign.type === 'email'
              ? 'bg-blue-500/10 text-blue-600'
              : 'bg-green-500/10 text-green-600'
          )}>
            {campaign.type === 'email' ? <Mail size={22} /> : <MessageSquare size={22} />}
          </div>
          <div className="flex-1">
            <h4 className={cn('font-bold text-sm mb-1', textStyles[theme])}>
              {campaign.name}
            </h4>
            <div className="flex items-center gap-2">
              <span className={cn(
                'text-xs px-2 py-1 rounded-lg font-medium',
                statusColors[campaign.status]
              )}>
                {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
              </span>
              {campaign.isDrip && (
                <span className="text-xs px-2 py-1 rounded-lg bg-purple-500/10 text-purple-600 font-medium">
                  Drip
                </span>
              )}
            </div>
          </div>
        </div>

        <button className="p-2 rounded-lg hover:bg-gray-100 transition-smooth">
          <MoreVertical size={16} />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className={cn(
          'p-3 rounded-xl',
          theme === 'pastel' && 'bg-pastel-background',
          theme === 'analytics' && 'bg-analytics-dark',
          theme === 'minimal' && 'bg-minimal-gray'
        )}>
          <p className="text-xs opacity-70 mb-1">Sent</p>
          <p className={cn('text-lg font-bold', textStyles[theme])}>
            {campaign.stats.sent.toLocaleString()}
          </p>
        </div>
        <div className={cn(
          'p-3 rounded-xl',
          theme === 'pastel' && 'bg-pastel-background',
          theme === 'analytics' && 'bg-analytics-dark',
          theme === 'minimal' && 'bg-minimal-gray'
        )}>
          <p className="text-xs opacity-70 mb-1">Delivered</p>
          <p className={cn('text-lg font-bold', textStyles[theme])}>
            {campaign.stats.delivered.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Email-specific metrics */}
      {campaign.type === 'email' && campaign.stats.opened !== undefined && (
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="opacity-70">Open Rate</span>
            <span className="font-semibold text-green-600">{getOpenRate()}%</span>
          </div>
          <div className={cn(
            'h-2 rounded-full overflow-hidden',
            theme === 'pastel' && 'bg-pastel-background',
            theme === 'analytics' && 'bg-analytics-dark',
            theme === 'minimal' && 'bg-minimal-gray'
          )}>
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${getOpenRate()}%` }}
            />
          </div>
        </div>
      )}

      {/* WhatsApp-specific metrics */}
      {campaign.type === 'whatsapp' && campaign.stats.replied !== undefined && (
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="opacity-70">Reply Rate</span>
            <span className="font-semibold text-green-600">{getReplyRate()}%</span>
          </div>
          <div className={cn(
            'h-2 rounded-full overflow-hidden',
            theme === 'pastel' && 'bg-pastel-background',
            theme === 'analytics' && 'bg-analytics-dark',
            theme === 'minimal' && 'bg-minimal-gray'
          )}>
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${getReplyRate()}%` }}
            />
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {campaign.status === 'live' && (
          <button className={cn(
            'flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-smooth',
            'bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20'
          )}>
            <Pause size={14} className="inline mr-1" />
            Pause
          </button>
        )}
        {campaign.status === 'paused' && (
          <button className={cn(
            'flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-smooth',
            'bg-green-500/10 text-green-600 hover:bg-green-500/20'
          )}>
            <Play size={14} className="inline mr-1" />
            Resume
          </button>
        )}
        <button className={cn(
          'flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-smooth',
          theme === 'pastel' && 'bg-pastel-purple/10 text-pastel-purple hover:bg-pastel-purple/20',
          theme === 'analytics' && 'bg-analytics-pink/20 text-analytics-pink',
          theme === 'minimal' && 'bg-minimal-blue/10 text-minimal-blue hover:bg-minimal-blue/20'
        )}>
          View Details
        </button>
      </div>
    </div>
  );
}
