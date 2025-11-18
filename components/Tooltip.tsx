"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Info, HelpCircle } from 'lucide-react';

interface TooltipProps {
  content: string;
  children?: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  icon?: 'info' | 'help';
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = 'top',
  icon = 'info',
  className
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const Icon = icon === 'info' ? Info : HelpCircle;

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent',
  };

  return (
    <div
      className={cn('relative inline-flex items-center', className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children || (
        <button
          className="inline-flex items-center justify-center w-5 h-5 rounded-full hover:bg-gray-100 transition-colors"
          type="button"
        >
          <Icon size={14} className="opacity-50 hover:opacity-100" />
        </button>
      )}

      {/* Tooltip */}
      {isVisible && (
        <div
          className={cn(
            'absolute z-50 px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-lg',
            'whitespace-nowrap animate-fadeIn',
            positionClasses[position]
          )}
        >
          {content}
          {/* Arrow */}
          <div
            className={cn(
              'absolute w-0 h-0 border-4 border-gray-900',
              arrowClasses[position]
            )}
          />
        </div>
      )}
    </div>
  );
}

// Inline tooltip for text
export function InlineTooltip({ children, content }: { children: React.ReactNode; content: string }) {
  return (
    <Tooltip content={content} position="top">
      <span className="cursor-help border-b border-dashed border-gray-400">
        {children}
      </span>
    </Tooltip>
  );
}
