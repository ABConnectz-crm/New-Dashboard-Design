export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  access: string;
  leadsConverted: number;
  color: string;
}

export interface Activity {
  id: string;
  type: "email" | "call" | "whatsapp" | "meeting" | "note";
  leadName: string;
  description: string;
  timestamp: string;
  icon: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: "email" | "whatsapp";
  status: "active" | "paused" | "completed";
  progress: number;
  sent: number;
  total: number;
  opens?: number;
  clicks?: number;
  responses?: number;
}

export interface Task {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  assignee: string;
  completed: boolean;
}

export interface PipelineStage {
  name: string;
  count: number;
  value: number;
  color: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  date?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Sales Manager",
    avatar: "SM",
    access: "Full Access",
    leadsConverted: 87,
    color: "#7c3aed",
  },
  {
    id: "2",
    name: "James Rodriguez",
    role: "Senior Sales Rep",
    avatar: "JR",
    access: "Full Access",
    leadsConverted: 64,
    color: "#fb923c",
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "Sales Rep",
    avatar: "EC",
    access: "Full Access",
    leadsConverted: 52,
    color: "#22d3ee",
  },
  {
    id: "4",
    name: "Marcus Johnson",
    role: "Sales Rep",
    avatar: "MJ",
    access: "Full Access",
    leadsConverted: 48,
    color: "#fbbf24",
  },
  {
    id: "5",
    name: "Olivia Brown",
    role: "BDR",
    avatar: "OB",
    access: "Limited Access",
    leadsConverted: 23,
    color: "#f472b6",
  },
];

export const recentActivities: Activity[] = [
  {
    id: "1",
    type: "email",
    leadName: "Acme Corporation",
    description: "Sent proposal email and pricing details",
    timestamp: "2 minutes ago",
    icon: "Mail",
  },
  {
    id: "2",
    type: "call",
    leadName: "TechStart Inc.",
    description: "Follow-up call scheduled for tomorrow",
    timestamp: "15 minutes ago",
    icon: "Phone",
  },
  {
    id: "3",
    type: "whatsapp",
    leadName: "Global Solutions Ltd",
    description: "Responded to product inquiry via WhatsApp",
    timestamp: "1 hour ago",
    icon: "MessageCircle",
  },
  {
    id: "4",
    type: "meeting",
    leadName: "Innovate Systems",
    description: "Demo completed, very interested in enterprise plan",
    timestamp: "2 hours ago",
    icon: "Video",
  },
  {
    id: "5",
    type: "note",
    leadName: "Digital Dynamics",
    description: "Added notes from discovery call",
    timestamp: "3 hours ago",
    icon: "FileText",
  },
  {
    id: "6",
    type: "email",
    leadName: "Future Tech Co",
    description: "Opened email campaign - high engagement",
    timestamp: "4 hours ago",
    icon: "Mail",
  },
];

export const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Q4 Product Launch",
    type: "email",
    status: "active",
    progress: 68,
    sent: 1247,
    total: 1835,
    opens: 672,
    clicks: 234,
  },
  {
    id: "2",
    name: "WhatsApp Drip - Enterprise",
    type: "whatsapp",
    status: "active",
    progress: 45,
    sent: 892,
    total: 1980,
    responses: 156,
  },
  {
    id: "3",
    name: "Re-engagement Campaign",
    type: "email",
    status: "active",
    progress: 82,
    sent: 2341,
    total: 2856,
    opens: 1203,
    clicks: 445,
  },
  {
    id: "4",
    name: "New Feature Announcement",
    type: "whatsapp",
    status: "active",
    progress: 34,
    sent: 567,
    total: 1667,
    responses: 89,
  },
  {
    id: "5",
    name: "Demo Request Follow-up",
    type: "email",
    status: "active",
    progress: 91,
    sent: 1823,
    total: 2003,
    opens: 1456,
    clicks: 678,
  },
];

export const todayTasks: Task[] = [
  {
    id: "1",
    title: "Follow up with Acme Corp on proposal",
    priority: "high",
    dueDate: "Today, 2:00 PM",
    assignee: "Sarah Mitchell",
    completed: false,
  },
  {
    id: "2",
    title: "Prepare demo for TechStart Inc",
    priority: "high",
    dueDate: "Today, 4:00 PM",
    assignee: "James Rodriguez",
    completed: false,
  },
  {
    id: "3",
    title: "Send contract to Global Solutions",
    priority: "medium",
    dueDate: "Today, 3:30 PM",
    assignee: "Emily Chen",
    completed: true,
  },
  {
    id: "4",
    title: "Update CRM notes for 5 leads",
    priority: "low",
    dueDate: "Today, 5:00 PM",
    assignee: "Marcus Johnson",
    completed: false,
  },
  {
    id: "5",
    title: "Review Q4 campaign performance",
    priority: "medium",
    dueDate: "Today, 6:00 PM",
    assignee: "Sarah Mitchell",
    completed: false,
  },
];

export const pipelineStages: PipelineStage[] = [
  {
    name: "New",
    count: 320,
    value: 960000,
    color: "#a78bfa",
  },
  {
    name: "Contacted",
    count: 180,
    value: 1080000,
    color: "#22d3ee",
  },
  {
    name: "Qualified",
    count: 95,
    value: 855000,
    color: "#fbbf24",
  },
  {
    name: "Negotiation",
    count: 42,
    value: 672000,
    color: "#fb923c",
  },
  {
    name: "Won",
    count: 87,
    value: 1740000,
    color: "#10b981",
  },
];

export const conversionData: ChartDataPoint[] = [
  { name: "Jan", value: 18.2 },
  { name: "Feb", value: 19.5 },
  { name: "Mar", value: 21.3 },
  { name: "Apr", value: 20.8 },
  { name: "May", value: 22.4 },
  { name: "Jun", value: 23.1 },
  { name: "Jul", value: 24.3 },
];

export const campaignPerformanceData: ChartDataPoint[] = [
  { name: "Week 1", value: 2340 },
  { name: "Week 2", value: 3120 },
  { name: "Week 3", value: 2890 },
  { name: "Week 4", value: 3450 },
  { name: "Week 5", value: 4120 },
  { name: "Week 6", value: 3890 },
  { name: "Week 7", value: 4560 },
  { name: "Week 8", value: 5234 },
];

export const leadSourceData: ChartDataPoint[] = [
  { name: "Website", value: 435 },
  { name: "Referral", value: 287 },
  { name: "Social Media", value: 198 },
  { name: "Email Campaign", value: 156 },
  { name: "Direct", value: 171 },
];

export const dashboardStats = {
  totalLeads: 1247,
  leadsGrowth: 12,
  activeCampaigns: 8,
  campaignsGrowth: 2,
  conversionRate: 24.3,
  conversionGrowth: 2.8,
  todayTasks: 15,
  tasksCompleted: 6,
  upcomingFollowups: 23,
  revenue: 5307000,
  revenueGrowth: 18.5,
};
