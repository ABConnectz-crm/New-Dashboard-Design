"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { demoTasks } from '@/lib/demo-data';
import { Calendar, Phone, Mail, Video, Clock, ChevronRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export function CalendarPreview() {
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

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'call':
        return Phone;
      case 'email':
        return Mail;
      case 'meeting':
        return Video;
      default:
        return Clock;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-500/5';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-500/5';
      case 'low':
        return 'border-l-green-500 bg-green-500/5';
      default:
        return 'border-l-gray-500 bg-gray-500/5';
    }
  };

  // Sort tasks by due date
  const sortedTasks = [...demoTasks]
    .filter(t => t.status !== 'completed')
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
    .slice(0, 5);

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-smooth',
      cardStyles[theme]
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={cn('text-lg font-bold flex items-center gap-2', textStyles[theme])}>
            <Calendar size={22} className="text-pastel-purple" />
            Upcoming Tasks
          </h3>
          <p className="text-sm opacity-70 mt-1">
            Today's schedule and priorities
          </p>
        </div>
        <button className="text-sm font-semibold text-pastel-purple hover:underline">
          View All
        </button>
      </div>

      {/* Today's Date */}
      <div className={cn(
        'mb-4 p-4 rounded-xl',
        theme === 'pastel' && 'bg-gradient-to-br from-pastel-purple to-pastel-sky',
        theme === 'analytics' && 'bg-gradient-pink-orange',
        theme === 'minimal' && 'bg-gradient-blue-purple'
      )}>
        <div className="text-white">
          <p className="text-sm font-medium opacity-90">Today</p>
          <p className="text-2xl font-bold">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </p>
          <p className="text-sm opacity-90 mt-1">
            {sortedTasks.length} tasks pending
          </p>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {sortedTasks.map((task) => {
          const Icon = getTaskIcon(task.type);
          return (
            <div
              key={task.id}
              className={cn(
                'p-4 rounded-xl border-l-4 transition-smooth cursor-pointer hover:scale-[1.02]',
                getPriorityColor(task.priority),
                theme === 'pastel' && 'bg-pastel-background/50',
                theme === 'analytics' && 'bg-analytics-dark/50',
                theme === 'minimal' && 'bg-minimal-gray/50'
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                  task.priority === 'high' && 'bg-red-500/10 text-red-600',
                  task.priority === 'medium' && 'bg-yellow-500/10 text-yellow-600',
                  task.priority === 'low' && 'bg-green-500/10 text-green-600'
                )}>
                  <Icon size={18} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className={cn('font-bold text-sm mb-1', textStyles[theme])}>
                    {task.title}
                  </h4>
                  <p className="text-xs opacity-70 mb-2 truncate">
                    {task.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 opacity-70">
                      <Clock size={12} />
                      {task.dueDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span className={cn(
                      'px-2 py-1 rounded-lg font-medium',
                      task.status === 'in-progress'
                        ? 'bg-blue-500/10 text-blue-600'
                        : 'bg-gray-500/10 text-gray-600'
                    )}>
                      {task.status === 'in-progress' ? 'In Progress' : 'Pending'}
                    </span>
                  </div>
                </div>

                <ChevronRight size={20} className="opacity-40 flex-shrink-0" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Add Button */}
      <button className={cn(
        'w-full mt-4 py-3 rounded-xl text-sm font-semibold transition-smooth',
        theme === 'pastel' && 'bg-pastel-purple text-white hover:bg-pastel-purple-dark',
        theme === 'analytics' && 'bg-gradient-pink-orange text-white',
        theme === 'minimal' && 'bg-minimal-blue text-white hover:bg-minimal-blue-light'
      )}>
        + Schedule New Task
      </button>
    </div>
  );
}
