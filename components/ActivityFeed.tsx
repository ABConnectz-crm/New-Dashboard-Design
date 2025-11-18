"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import {
  UserPlus,
  Mail,
  MessageSquare,
  Phone,
  CheckCircle2,
  AlertCircle,
  Clock,
  TrendingUp,
  Zap,
  Users,
  Target
} from 'lucide-react';

interface Activity {
  id: string;
  type: 'lead' | 'campaign' | 'task' | 'flow' | 'team';
  action: string;
  user: string;
  timestamp: Date;
  status?: 'success' | 'warning' | 'error';
  details?: string;
}

const recentActivities: Activity[] = [
  {
    id: 'A001',
    type: 'lead',
    action: 'New lead created',
    user: 'Sarah Johnson',
    timestamp: new Date(Date.now() - 5 * 60000),
    status: 'success',
    details: 'John Smith from Tech Corp'
  },
  {
    id: 'A002',
    type: 'campaign',
    action: 'Email campaign delivered',
    user: 'System',
    timestamp: new Date(Date.now() - 12 * 60000),
    status: 'success',
    details: 'Q1 Product Launch - 5,280 emails sent'
  },
  {
    id: 'A003',
    type: 'flow',
    action: 'WhatsApp flow triggered',
    user: 'Automation',
    timestamp: new Date(Date.now() - 18 * 60000),
    status: 'success',
    details: 'Welcome Series - 45 recipients'
  },
  {
    id: 'A004',
    type: 'task',
    action: 'Task completed',
    user: 'Mike Wilson',
    timestamp: new Date(Date.now() - 25 * 60000),
    status: 'success',
    details: 'Follow up call with Emily Chen'
  },
  {
    id: 'A005',
    type: 'campaign',
    action: 'WhatsApp message failed',
    user: 'System',
    timestamp: new Date(Date.now() - 32 * 60000),
    status: 'error',
    details: '12 messages bounced - Invalid numbers'
  },
  {
    id: 'A006',
    type: 'team',
    action: 'Lead assigned',
    user: 'Sarah Johnson',
    timestamp: new Date(Date.now() - 40 * 60000),
    status: 'success',
    details: 'Assigned 3 leads to Jessica Lee'
  },
  {
    id: 'A007',
    type: 'lead',
    action: 'Lead converted',
    user: 'David Chen',
    timestamp: new Date(Date.now() - 48 * 60000),
    status: 'success',
    details: 'Robert Lee - $125,000 deal'
  },
  {
    id: 'A008',
    type: 'flow',
    action: 'Automation paused',
    user: 'Sarah Johnson',
    timestamp: new Date(Date.now() - 55 * 60000),
    status: 'warning',
    details: 'Cart Recovery flow - Low success rate'
  },
];

export function ActivityFeed() {
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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lead':
        return UserPlus;
      case 'campaign':
        return Mail;
      case 'flow':
        return Zap;
      case 'task':
        return CheckCircle2;
      case 'team':
        return Users;
      default:
        return Target;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'lead':
        return 'bg-purple-500/10 text-purple-600';
      case 'campaign':
        return 'bg-blue-500/10 text-blue-600';
      case 'flow':
        return 'bg-yellow-500/10 text-yellow-600';
      case 'task':
        return 'bg-green-500/10 text-green-600';
      case 'team':
        return 'bg-pink-500/10 text-pink-600';
      default:
        return 'bg-gray-500/10 text-gray-600';
    }
  };

  const getStatusIcon = (status?: string) => {
    if (!status) return null;
    switch (status) {
      case 'success':
        return <CheckCircle2 size={12} className="text-green-500" />;
      case 'warning':
        return <AlertCircle size={12} className="text-yellow-500" />;
      case 'error':
        return <AlertCircle size={12} className="text-red-500" />;
      default:
        return null;
    }
  };

  const getTimeAgo = (timestamp: Date) => {
    const minutes = Math.floor((Date.now() - timestamp.getTime()) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
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
            <Clock size={22} className="text-pastel-purple" />
            Activity Feed
          </h3>
          <p className="text-sm opacity-70 mt-1">
            Real-time team actions and system events
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-green-600">Live</span>
        </div>
      </div>

      {/* Activity List */}
      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
        {recentActivities.map((activity, index) => {
          const Icon = getActivityIcon(activity.type);
          return (
            <div
              key={activity.id}
              className={cn(
                'p-4 rounded-xl transition-all duration-300 cursor-pointer group',
                'hover:scale-[1.02] hover:shadow-md',
                theme === 'pastel' && 'bg-pastel-background hover:bg-pastel-background/70',
                theme === 'analytics' && 'bg-analytics-dark hover:bg-analytics-dark-light',
                theme === 'minimal' && 'bg-minimal-gray hover:bg-minimal-gray-dark',
                'animate-fadeIn'
              )}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                  'transition-transform group-hover:scale-110',
                  getActivityColor(activity.type)
                )}>
                  <Icon size={18} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className={cn('font-semibold text-sm', textStyles[theme])}>
                      {activity.action}
                    </h4>
                    {getStatusIcon(activity.status)}
                  </div>

                  <p className="text-xs opacity-70 mb-2">
                    by <span className="font-medium">{activity.user}</span>
                  </p>

                  {activity.details && (
                    <p className={cn(
                      'text-xs mb-2 line-clamp-1',
                      activity.status === 'error' ? 'text-red-600' : 'opacity-80'
                    )}>
                      {activity.details}
                    </p>
                  )}

                  <div className="flex items-center gap-2">
                    <Clock size={12} className="opacity-50" />
                    <span className="text-xs opacity-70">
                      {getTimeAgo(activity.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className={cn(
        'mt-4 pt-4 border-t flex items-center justify-between',
        theme === 'pastel' && 'border-pastel-background',
        theme === 'analytics' && 'border-analytics-dark',
        theme === 'minimal' && 'border-minimal-gray-dark'
      )}>
        <span className="text-sm opacity-70">
          {recentActivities.length} activities today
        </span>
        <button className="text-sm font-semibold text-pastel-purple hover:underline">
          View All Activity →
        </button>
      </div>
    </div>
  );
}
