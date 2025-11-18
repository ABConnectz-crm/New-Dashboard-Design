"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { WelcomeBanner } from '@/components/WelcomeBanner';
import { StatsCard } from '@/components/StatsCard';
import { PipelineFunnel } from '@/components/PipelineFunnel';
import { CampaignCard } from '@/components/CampaignCard';
import { FlowEditorPreview } from '@/components/FlowEditorPreview';
import { CalendarPreview } from '@/components/CalendarPreview';
import { TeamActivity } from '@/components/TeamActivity';
import { QuickActions } from '@/components/QuickActions';
import { LeadOverview } from '@/components/LeadOverview';
import { demoCampaigns, leadStats } from '@/lib/demo-data';
import {
  Users,
  UserPlus,
  TrendingUp,
  Target,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function DashboardPage() {
  const { theme } = useTheme();

  const bgStyles = {
    pastel: 'bg-pastel-background',
    analytics: 'bg-analytics-background',
    minimal: 'bg-minimal-background',
  };

  return (
    <div className={cn('min-h-screen transition-smooth', bgStyles[theme])}>
      <div className="p-8 space-y-8">
        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Key Metrics - Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Leads"
            value={leadStats.thisMonth}
            change={12.5}
            trend="up"
            icon={Users}
            iconColor="purple"
            subtitle="This month"
          />
          <StatsCard
            title="New Leads Today"
            value={leadStats.today}
            change={8.2}
            trend="up"
            icon={UserPlus}
            iconColor="sky"
            subtitle="vs yesterday"
          />
          <StatsCard
            title="Conversion Rate"
            value="21.2%"
            change={3.4}
            trend="up"
            icon={TrendingUp}
            iconColor="yellow"
            subtitle="Pipeline average"
          />
          <StatsCard
            title="Active Campaigns"
            value={demoCampaigns.filter(c => c.status === 'live').length}
            icon={Target}
            iconColor="orange"
            subtitle="Running now"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Lead Overview Chart */}
            <LeadOverview />

            {/* Campaign Performance */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className={cn(
                  'text-xl font-bold',
                  theme === 'pastel' && 'text-pastel-text',
                  theme === 'analytics' && 'text-white',
                  theme === 'minimal' && 'text-minimal-text'
                )}>
                  Active Campaigns
                </h2>
                <button className="text-sm font-semibold text-pastel-purple hover:underline">
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {demoCampaigns.filter(c => c.status === 'live' || c.status === 'scheduled').map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            </div>

            {/* Campaign Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                title="Email Campaigns"
                value={demoCampaigns.filter(c => c.type === 'email').length}
                icon={Mail}
                iconColor="sky"
                subtitle={`${demoCampaigns.filter(c => c.type === 'email' && c.status === 'live').length} active`}
              />
              <StatsCard
                title="WhatsApp Campaigns"
                value={demoCampaigns.filter(c => c.type === 'whatsapp').length}
                icon={MessageSquare}
                iconColor="yellow"
                subtitle={`${demoCampaigns.filter(c => c.type === 'whatsapp' && c.status === 'live').length} active`}
              />
              <StatsCard
                title="Drip Campaigns"
                value={demoCampaigns.filter(c => c.isDrip).length}
                icon={Clock}
                iconColor="purple"
                subtitle="Automated sequences"
              />
            </div>

            {/* Flow Automation */}
            <FlowEditorPreview />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <QuickActions />

            {/* Pipeline Funnel */}
            <PipelineFunnel />

            {/* Calendar/Tasks */}
            <CalendarPreview />
          </div>
        </div>

        {/* Team Performance - Full Width */}
        <TeamActivity />

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Tasks Completed"
            value="156"
            change={15.2}
            trend="up"
            icon={CheckCircle2}
            iconColor="green"
          />
          <StatsCard
            title="Avg Response Time"
            value="2.4h"
            change={-12.5}
            trend="up"
            icon={Clock}
            iconColor="sky"
            subtitle="Faster than last week"
          />
          <StatsCard
            title="Lead Score Avg"
            value="78"
            change={5.8}
            trend="up"
            icon={TrendingUp}
            iconColor="purple"
          />
          <StatsCard
            title="Pipeline Value"
            value="$4.2M"
            change={18.3}
            trend="up"
            icon={Target}
            iconColor="yellow"
          />
        </div>
      </div>
    </div>
  );
}
