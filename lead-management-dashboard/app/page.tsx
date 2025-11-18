"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CampaignChart } from "@/components/dashboard/CampaignChart";
import { PipelineFunnel } from "@/components/dashboard/PipelineFunnel";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { TeamMembers } from "@/components/dashboard/TeamMembers";
import { TasksList } from "@/components/dashboard/TasksList";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Users, Megaphone, Target, CheckSquare } from "lucide-react";
import { dashboardStats } from "@/lib/data";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-72">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome back, Sarah! 👋
            </h1>
            <p className="text-muted-foreground text-lg">
              Here's what's happening with your leads today
            </p>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Leads"
              value={dashboardStats.totalLeads}
              change={{ value: dashboardStats.leadsGrowth, trend: "up" }}
              icon={Users}
              gradient="from-purple-500 to-purple-600"
              subtitle="All time leads"
            />
            <MetricCard
              title="Active Campaigns"
              value={dashboardStats.activeCampaigns}
              change={{ value: dashboardStats.campaignsGrowth, trend: "up" }}
              icon={Megaphone}
              gradient="from-blue-500 to-cyan-500"
              subtitle="3 Email • 5 WhatsApp"
            />
            <MetricCard
              title="Conversion Rate"
              value={`${dashboardStats.conversionRate}%`}
              change={{ value: dashboardStats.conversionGrowth, trend: "up" }}
              icon={Target}
              gradient="from-orange-500 to-pink-500"
              subtitle="Above target by 4.3%"
            />
            <MetricCard
              title="Today's Tasks"
              value={dashboardStats.todayTasks}
              icon={CheckSquare}
              gradient="from-green-500 to-emerald-500"
              subtitle={`${dashboardStats.tasksCompleted} completed`}
            />
          </div>

          {/* Charts and Pipeline Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CampaignChart />
            <PipelineFunnel />
          </div>

          {/* Activity, Tasks, Team Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
            <QuickActions />
          </div>

          {/* Team and Tasks Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TeamMembers />
            <TasksList />
          </div>
        </main>
      </div>
    </div>
  );
}
