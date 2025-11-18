"use client";

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { WelcomeBanner } from '@/components/WelcomeBanner';
import { EnhancedStatsCard } from '@/components/EnhancedStatsCard';
import { PipelineFunnel } from '@/components/PipelineFunnel';
import { CampaignCard } from '@/components/CampaignCard';
import { FlowEditorPreview } from '@/components/FlowEditorPreview';
import { CalendarPreview } from '@/components/CalendarPreview';
import { TeamActivity } from '@/components/TeamActivity';
import { QuickActions } from '@/components/QuickActions';
import { LeadOverview } from '@/components/LeadOverview';
import { ActivityFeed } from '@/components/ActivityFeed';
import { IntegrationHealth } from '@/components/IntegrationHealth';
import { demoCampaigns, leadStats } from '@/lib/demo-data';
import {
  Users,
  UserPlus,
  TrendingUp,
  Target,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
  Zap,
  AlertCircle,
  Activity
} from 'lucide-react';

export default function EnhancedDashboardPage() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  const bgStyles = {
    pastel: 'bg-pastel-background',
    analytics: 'bg-analytics-background',
    minimal: 'bg-minimal-background',
  };

  // Sample sparkline data for various metrics
  const leadsSparkline = [120, 145, 132, 168, 189, 210, 245];
  const conversionSparkline = [18, 21, 19, 23, 24, 22, 26];
  const campaignSparkline = [8, 12, 10, 15, 14, 18, 16];
  const responseSparkline = [320, 280, 245, 210, 185, 165, 144];

  return (
    <div className={cn('min-h-screen transition-smooth', bgStyles[theme])}>
      <div className="p-4 md:p-8 space-y-6 md:space-y-8">
        {/* Welcome Banner */}
        <div className="animate-slideDown">
          <WelcomeBanner />
        </div>

        {/* Key Metrics - Hero Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className={cn(
              'text-2xl font-bold',
              theme === 'pastel' && 'text-pastel-text',
              theme === 'analytics' && 'text-white',
              theme === 'minimal' && 'text-minimal-text'
            )}>
              Key Performance Indicators
            </h2>
            <button className="text-sm font-semibold text-pastel-purple hover:underline">
              View Full Report →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <EnhancedStatsCard
              title="Total Leads"
              value={leadStats.thisMonth}
              change={12.5}
              trend="up"
              icon={Users}
              iconColor="purple"
              subtitle="This month"
              sparklineData={leadsSparkline}
              tooltip="Total number of leads acquired this month across all channels"
              loading={loading}
            />
            <EnhancedStatsCard
              title="New Leads Today"
              value={leadStats.today}
              change={8.2}
              trend="up"
              icon={UserPlus}
              iconColor="sky"
              subtitle="vs yesterday"
              sparklineData={[12, 18, 15, 21, 19, 24, 23]}
              tooltip="Fresh leads captured today from website, campaigns, and referrals"
              loading={loading}
            />
            <EnhancedStatsCard
              title="Conversion Rate"
              value="21.2%"
              change={3.4}
              trend="up"
              icon={TrendingUp}
              iconColor="yellow"
              subtitle="Pipeline average"
              sparklineData={conversionSparkline}
              tooltip="Percentage of leads that convert through the entire pipeline"
              loading={loading}
            />
            <EnhancedStatsCard
              title="Active Campaigns"
              value={demoCampaigns.filter(c => c.status === 'live').length}
              icon={Target}
              iconColor="orange"
              subtitle="Running now"
              sparklineData={campaignSparkline}
              tooltip="Currently active email and WhatsApp campaigns"
              loading={loading}
            />
          </div>
        </div>

        {/* Secondary Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EnhancedStatsCard
            title="Avg Response Time"
            value="2.4h"
            change={-12.5}
            trend="up"
            icon={Clock}
            iconColor="sky"
            subtitle="Faster than last week"
            sparklineData={responseSparkline}
            tooltip="Average time to respond to new leads"
            loading={loading}
          />
          <EnhancedStatsCard
            title="WhatsApp Deliverability"
            value="98.7%"
            change={1.2}
            trend="up"
            icon={MessageSquare}
            iconColor="green"
            subtitle="Last 24 hours"
            sparklineData={[96, 97, 98, 97, 99, 98, 99]}
            tooltip="Percentage of WhatsApp messages successfully delivered"
            loading={loading}
          />
          <EnhancedStatsCard
            title="Active Automations"
            value="12"
            icon={Zap}
            iconColor="yellow"
            subtitle="3 drip campaigns"
            sparklineData={[8, 9, 10, 11, 12, 12, 12]}
            tooltip="Number of active flow-based automations and drip sequences"
            loading={loading}
          />
          <EnhancedStatsCard
            title="Lead Assignment Delays"
            value="< 5m"
            change={-45.2}
            trend="up"
            icon={AlertCircle}
            iconColor="purple"
            subtitle="Much improved"
            sparklineData={[25, 20, 15, 12, 8, 6, 5]}
            tooltip="Average time before leads are assigned to team members"
            loading={loading}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Lead Overview Chart */}
            <div className="animate-slideUp" style={{ animationDelay: '100ms' }}>
              <LeadOverview />
            </div>

            {/* Campaign Performance */}
            <div className="animate-slideUp" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className={cn(
                  'text-xl font-bold',
                  theme === 'pastel' && 'text-pastel-text',
                  theme === 'analytics' && 'text-white',
                  theme === 'minimal' && 'text-minimal-text'
                )}>
                  Active Campaigns
                  <span className="ml-2 text-sm font-normal opacity-70">
                    ({demoCampaigns.filter(c => c.status === 'live').length} running)
                  </span>
                </h2>
                <button className="text-sm font-semibold text-pastel-purple hover:underline">
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {demoCampaigns
                  .filter(c => c.status === 'live' || c.status === 'scheduled')
                  .map((campaign) => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                  ))}
              </div>
            </div>

            {/* Campaign Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <EnhancedStatsCard
                title="Email Campaigns"
                value={demoCampaigns.filter(c => c.type === 'email').length}
                icon={Mail}
                iconColor="sky"
                subtitle={`${demoCampaigns.filter(c => c.type === 'email' && c.status === 'live').length} active`}
                tooltip="Total email campaigns created"
              />
              <EnhancedStatsCard
                title="WhatsApp Campaigns"
                value={demoCampaigns.filter(c => c.type === 'whatsapp').length}
                icon={MessageSquare}
                iconColor="green"
                subtitle={`${demoCampaigns.filter(c => c.type === 'whatsapp' && c.status === 'live').length} active`}
                tooltip="Total WhatsApp campaigns including flows"
              />
              <EnhancedStatsCard
                title="Drip Campaigns"
                value={demoCampaigns.filter(c => c.isDrip).length}
                icon={Clock}
                iconColor="purple"
                subtitle="Automated sequences"
                tooltip="Multi-step drip campaigns with time delays"
              />
            </div>

            {/* Flow Automation */}
            <div className="animate-slideUp" style={{ animationDelay: '300ms' }}>
              <FlowEditorPreview />
            </div>

            {/* Activity Feed */}
            <div className="animate-slideUp" style={{ animationDelay: '400ms' }}>
              <ActivityFeed />
            </div>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="animate-slideUp" style={{ animationDelay: '150ms' }}>
              <QuickActions />
            </div>

            {/* Pipeline Funnel */}
            <div className="animate-slideUp" style={{ animationDelay: '250ms' }}>
              <PipelineFunnel />
            </div>

            {/* Calendar/Tasks */}
            <div className="animate-slideUp" style={{ animationDelay: '350ms' }}>
              <CalendarPreview />
            </div>

            {/* Integration Health */}
            <div className="animate-slideUp" style={{ animationDelay: '450ms' }}>
              <IntegrationHealth />
            </div>
          </div>
        </div>

        {/* Team Performance - Full Width */}
        <div className="animate-slideUp" style={{ animationDelay: '500ms' }}>
          <TeamActivity />
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <EnhancedStatsCard
            title="Tasks Completed"
            value="156"
            change={15.2}
            trend="up"
            icon={CheckCircle2}
            iconColor="green"
            sparklineData={[102, 115, 128, 134, 142, 148, 156]}
            tooltip="Total tasks completed this month"
          />
          <EnhancedStatsCard
            title="Integration Health"
            value="95.8%"
            change={2.1}
            trend="up"
            icon={Activity}
            iconColor="sky"
            sparklineData={[92, 94, 93, 95, 96, 96, 96]}
            tooltip="Overall health score of all SOAP/REST integrations"
          />
          <EnhancedStatsCard
            title="Lead Score Avg"
            value="78"
            change={5.8}
            trend="up"
            icon={TrendingUp}
            iconColor="purple"
            sparklineData={[65, 68, 72, 74, 75, 76, 78]}
            tooltip="Average lead quality score"
          />
          <EnhancedStatsCard
            title="Pipeline Value"
            value="$4.2M"
            change={18.3}
            trend="up"
            icon={Target}
            iconColor="yellow"
            sparklineData={[2.8, 3.1, 3.4, 3.6, 3.8, 4.0, 4.2]}
            tooltip="Total value of all opportunities in pipeline"
          />
        </div>
      </div>
    </div>
  );
}
