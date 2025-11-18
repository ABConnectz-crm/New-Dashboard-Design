"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { UserPlus, Calendar, Mail, MessageSquare, Phone, FileText } from 'lucide-react';

export function QuickActions() {
  const { theme } = useTheme();

  const actions = [
    { icon: UserPlus, label: 'Add Lead', color: 'purple', gradient: 'from-pastel-purple to-pastel-purple-dark' },
    { icon: Calendar, label: 'Schedule Meeting', color: 'sky', gradient: 'from-pastel-sky to-blue-600' },
    { icon: Mail, label: 'Send Email', color: 'yellow', gradient: 'from-pastel-yellow to-orange-500' },
    { icon: MessageSquare, label: 'WhatsApp Message', color: 'green', gradient: 'from-green-500 to-green-600' },
    { icon: Phone, label: 'Make Call', color: 'orange', gradient: 'from-pastel-orange to-red-500' },
    { icon: FileText, label: 'Create Task', color: 'pink', gradient: 'from-pink-500 to-purple-500' },
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
      <h3 className={cn('text-lg font-bold mb-6', textStyles[theme])}>
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className={cn(
                'p-4 rounded-xl transition-smooth hover:scale-105 group',
                theme === 'pastel' && 'bg-pastel-background hover:shadow-soft',
                theme === 'analytics' && 'bg-analytics-dark hover:bg-analytics-dark-light',
                theme === 'minimal' && 'bg-minimal-gray hover:bg-minimal-gray-dark'
              )}
            >
              <div className={cn(
                'w-12 h-12 rounded-xl bg-gradient-to-br mb-3',
                'flex items-center justify-center text-white',
                'group-hover:scale-110 transition-transform',
                action.gradient
              )}>
                <Icon size={22} />
              </div>
              <p className={cn('text-sm font-semibold text-left', textStyles[theme])}>
                {action.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
