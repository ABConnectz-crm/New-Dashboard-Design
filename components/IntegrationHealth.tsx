"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { Plug, CheckCircle2, AlertTriangle, XCircle, Activity, Globe } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  type: 'REST' | 'SOAP' | 'Webhook';
  status: 'healthy' | 'warning' | 'error' | 'disconnected';
  lastSync: Date;
  uptime: number;
  requestsToday: number;
  avgResponseTime: number;
}

const integrations: Integration[] = [
  {
    id: 'INT001',
    name: 'Salesforce CRM',
    type: 'REST',
    status: 'healthy',
    lastSync: new Date(Date.now() - 2 * 60000),
    uptime: 99.8,
    requestsToday: 1245,
    avgResponseTime: 145
  },
  {
    id: 'INT002',
    name: 'SAP ERP System',
    type: 'SOAP',
    status: 'healthy',
    lastSync: new Date(Date.now() - 5 * 60000),
    uptime: 98.5,
    requestsToday: 342,
    avgResponseTime: 892
  },
  {
    id: 'INT003',
    name: 'WhatsApp Business API',
    type: 'REST',
    status: 'warning',
    lastSync: new Date(Date.now() - 15 * 60000),
    uptime: 95.2,
    requestsToday: 5678,
    avgResponseTime: 234
  },
  {
    id: 'INT004',
    name: 'Email Service (SendGrid)',
    type: 'REST',
    status: 'healthy',
    lastSync: new Date(Date.now() - 1 * 60000),
    uptime: 99.9,
    requestsToday: 8934,
    avgResponseTime: 98
  },
  {
    id: 'INT005',
    name: 'Legacy Order System',
    type: 'SOAP',
    status: 'error',
    lastSync: new Date(Date.now() - 45 * 60000),
    uptime: 87.3,
    requestsToday: 12,
    avgResponseTime: 1540
  },
  {
    id: 'INT006',
    name: 'Payment Gateway',
    type: 'Webhook',
    status: 'healthy',
    lastSync: new Date(Date.now() - 3 * 60000),
    uptime: 99.7,
    requestsToday: 456,
    avgResponseTime: 187
  },
];

export function IntegrationHealth() {
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

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'healthy':
        return {
          icon: CheckCircle2,
          color: 'bg-green-500/10 text-green-600 border-green-500/20',
          label: 'Healthy',
          pulse: false
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          color: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
          label: 'Warning',
          pulse: true
        };
      case 'error':
        return {
          icon: XCircle,
          color: 'bg-red-500/10 text-red-600 border-red-500/20',
          label: 'Error',
          pulse: true
        };
      default:
        return {
          icon: XCircle,
          color: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
          label: 'Disconnected',
          pulse: false
        };
    }
  };

  const getTimeAgo = (timestamp: Date) => {
    const minutes = Math.floor((Date.now() - timestamp.getTime()) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    return `${Math.floor(minutes / 60)}h ago`;
  };

  const healthyCount = integrations.filter(i => i.status === 'healthy').length;
  const warningCount = integrations.filter(i => i.status === 'warning').length;
  const errorCount = integrations.filter(i => i.status === 'error').length;

  return (
    <div className={cn(
      'rounded-2xl p-6 transition-smooth',
      cardStyles[theme]
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={cn('text-lg font-bold flex items-center gap-2', textStyles[theme])}>
            <Plug size={22} className="text-pastel-sky" />
            Integration Health
          </h3>
          <p className="text-sm opacity-70 mt-1">
            SOAP & REST API status monitoring
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={16} className="opacity-50" />
          <span className="text-sm font-medium">{integrations.length} Connected</span>
        </div>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className={cn(
          'p-3 rounded-xl text-center',
          theme === 'pastel' && 'bg-green-500/10',
          theme === 'analytics' && 'bg-green-500/20',
          theme === 'minimal' && 'bg-green-500/10'
        )}>
          <div className="text-2xl font-bold text-green-600 mb-1">{healthyCount}</div>
          <div className="text-xs opacity-70">Healthy</div>
        </div>
        <div className={cn(
          'p-3 rounded-xl text-center',
          theme === 'pastel' && 'bg-yellow-500/10',
          theme === 'analytics' && 'bg-yellow-500/20',
          theme === 'minimal' && 'bg-yellow-500/10'
        )}>
          <div className="text-2xl font-bold text-yellow-600 mb-1">{warningCount}</div>
          <div className="text-xs opacity-70">Warnings</div>
        </div>
        <div className={cn(
          'p-3 rounded-xl text-center',
          theme === 'pastel' && 'bg-red-500/10',
          theme === 'analytics' && 'bg-red-500/20',
          theme === 'minimal' && 'bg-red-500/10'
        )}>
          <div className="text-2xl font-bold text-red-600 mb-1">{errorCount}</div>
          <div className="text-xs opacity-70">Errors</div>
        </div>
      </div>

      {/* Integration List */}
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {integrations.map((integration) => {
          const statusInfo = getStatusInfo(integration.status);
          const StatusIcon = statusInfo.icon;

          return (
            <div
              key={integration.id}
              className={cn(
                'p-4 rounded-xl transition-all duration-300 cursor-pointer group',
                'hover:scale-[1.01] hover:shadow-md border',
                theme === 'pastel' && 'bg-pastel-background border-transparent hover:border-pastel-purple/20',
                theme === 'analytics' && 'bg-analytics-dark border-transparent hover:border-analytics-pink/20',
                theme === 'minimal' && 'bg-minimal-gray border-transparent hover:border-minimal-blue/20'
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center',
                    'transition-transform group-hover:scale-110',
                    theme === 'pastel' && 'bg-pastel-sky/10 text-pastel-sky',
                    theme === 'analytics' && 'bg-analytics-blue/20 text-analytics-blue',
                    theme === 'minimal' && 'bg-minimal-blue/10 text-minimal-blue'
                  )}>
                    <Activity size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className={cn('font-bold text-sm mb-1', textStyles[theme])}>
                      {integration.name}
                    </h4>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-gray-500/10 text-gray-600 font-medium">
                      {integration.type}
                    </span>
                  </div>
                </div>

                <div className={cn(
                  'px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border',
                  statusInfo.color
                )}>
                  <StatusIcon size={12} />
                  <span>{statusInfo.label}</span>
                  {statusInfo.pulse && (
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  )}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div>
                  <p className="text-xs opacity-70 mb-0.5">Uptime</p>
                  <p className={cn(
                    'text-sm font-bold',
                    integration.uptime >= 99 ? 'text-green-600' :
                    integration.uptime >= 95 ? 'text-yellow-600' : 'text-red-600'
                  )}>
                    {integration.uptime}%
                  </p>
                </div>
                <div>
                  <p className="text-xs opacity-70 mb-0.5">Requests</p>
                  <p className={cn('text-sm font-bold', textStyles[theme])}>
                    {integration.requestsToday.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs opacity-70 mb-0.5">Avg Time</p>
                  <p className={cn(
                    'text-sm font-bold',
                    integration.avgResponseTime < 200 ? 'text-green-600' :
                    integration.avgResponseTime < 500 ? 'text-yellow-600' : 'text-red-600'
                  )}>
                    {integration.avgResponseTime}ms
                  </p>
                </div>
              </div>

              {/* Last Sync */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-xs opacity-70">
                  Last sync: <span className="font-medium">{getTimeAgo(integration.lastSync)}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className={cn(
        'mt-4 pt-4 border-t',
        theme === 'pastel' && 'border-pastel-background',
        theme === 'analytics' && 'border-analytics-dark',
        theme === 'minimal' && 'border-minimal-gray-dark'
      )}>
        <button className={cn(
          'w-full py-2 px-4 rounded-xl text-sm font-semibold transition-smooth',
          theme === 'pastel' && 'bg-pastel-purple text-white hover:bg-pastel-purple-dark',
          theme === 'analytics' && 'bg-gradient-pink-orange text-white',
          theme === 'minimal' && 'bg-minimal-blue text-white hover:bg-minimal-blue-light'
        )}>
          Manage Integrations
        </button>
      </div>
    </div>
  );
}
