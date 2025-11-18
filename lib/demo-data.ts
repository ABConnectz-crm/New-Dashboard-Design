/**
 * Demo Data for ERP Dashboard
 * This file contains all sample data for leads, campaigns, flows, tasks, and team activities
 */

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  score: number;
  stage: 'new' | 'contacted' | 'qualified' | 'converted';
  assignedTo: string;
  createdAt: Date;
  value: number;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'email' | 'whatsapp' | 'sms';
  status: 'draft' | 'scheduled' | 'live' | 'paused' | 'completed';
  isDrip: boolean;
  stats: {
    sent: number;
    delivered: number;
    opened?: number;
    clicked?: number;
    replied?: number;
    bounced?: number;
  };
  schedule: {
    startDate: Date;
    endDate?: Date;
    nextSend?: Date;
  };
}

export interface FlowAutomation {
  id: string;
  name: string;
  type: 'whatsapp' | 'email';
  status: 'active' | 'paused' | 'draft';
  nodes: number;
  triggers: string[];
  stats: {
    totalRuns: number;
    successRate: number;
    avgCompletionTime: string;
  };
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'call' | 'email' | 'meeting' | 'follow-up';
  priority: 'low' | 'medium' | 'high';
  assignedTo: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed';
  leadId?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
  stats: {
    leadsHandled: number;
    callsMade: number;
    messagesSent: number;
    tasksCompleted: number;
    conversionRate: number;
  };
}

// Demo Leads
export const demoLeads: Lead[] = [
  {
    id: 'L001',
    name: 'John Smith',
    company: 'Tech Corp',
    email: 'john@techcorp.com',
    phone: '+1-555-0101',
    source: 'Website',
    score: 85,
    stage: 'qualified',
    assignedTo: 'Sarah Johnson',
    createdAt: new Date('2024-01-15'),
    value: 45000,
  },
  {
    id: 'L002',
    name: 'Emily Chen',
    company: 'StartupXYZ',
    email: 'emily@startupxyz.com',
    phone: '+1-555-0102',
    source: 'LinkedIn Campaign',
    score: 92,
    stage: 'contacted',
    assignedTo: 'Mike Wilson',
    createdAt: new Date('2024-01-16'),
    value: 78000,
  },
  {
    id: 'L003',
    name: 'Robert Lee',
    company: 'Enterprise Inc',
    email: 'robert@enterprise.com',
    phone: '+1-555-0103',
    source: 'Referral',
    score: 95,
    stage: 'converted',
    assignedTo: 'Sarah Johnson',
    createdAt: new Date('2024-01-10'),
    value: 125000,
  },
  // Add more demo leads...
];

// Demo Campaigns
export const demoCampaigns: Campaign[] = [
  {
    id: 'C001',
    name: 'Q1 Product Launch Email',
    type: 'email',
    status: 'live',
    isDrip: true,
    stats: {
      sent: 5420,
      delivered: 5280,
      opened: 2110,
      clicked: 845,
      bounced: 140,
    },
    schedule: {
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-03-31'),
      nextSend: new Date('2024-01-20'),
    },
  },
  {
    id: 'C002',
    name: 'WhatsApp Onboarding Flow',
    type: 'whatsapp',
    status: 'live',
    isDrip: true,
    stats: {
      sent: 3250,
      delivered: 3180,
      replied: 1590,
    },
    schedule: {
      startDate: new Date('2024-01-05'),
      nextSend: new Date('2024-01-19'),
    },
  },
  {
    id: 'C003',
    name: 'January Promotion Email',
    type: 'email',
    status: 'completed',
    isDrip: false,
    stats: {
      sent: 12500,
      delivered: 12150,
      opened: 6075,
      clicked: 1822,
      bounced: 350,
    },
    schedule: {
      startDate: new Date('2024-01-08'),
      endDate: new Date('2024-01-15'),
    },
  },
  {
    id: 'C004',
    name: 'Re-engagement WhatsApp',
    type: 'whatsapp',
    status: 'scheduled',
    isDrip: false,
    stats: {
      sent: 0,
      delivered: 0,
      replied: 0,
    },
    schedule: {
      startDate: new Date('2024-01-25'),
      nextSend: new Date('2024-01-25'),
    },
  },
];

// Demo Flow Automations
export const demoFlows: FlowAutomation[] = [
  {
    id: 'F001',
    name: 'Lead Nurture Email Sequence',
    type: 'email',
    status: 'active',
    nodes: 8,
    triggers: ['New Lead', 'Form Submission'],
    stats: {
      totalRuns: 1245,
      successRate: 87.5,
      avgCompletionTime: '5.2 days',
    },
  },
  {
    id: 'F002',
    name: 'WhatsApp Welcome Series',
    type: 'whatsapp',
    status: 'active',
    nodes: 12,
    triggers: ['New Customer', 'Product Purchase'],
    stats: {
      totalRuns: 892,
      successRate: 92.3,
      avgCompletionTime: '3.1 days',
    },
  },
  {
    id: 'F003',
    name: 'Abandoned Cart Recovery',
    type: 'whatsapp',
    status: 'paused',
    nodes: 6,
    triggers: ['Cart Abandoned'],
    stats: {
      totalRuns: 567,
      successRate: 78.9,
      avgCompletionTime: '2.5 days',
    },
  },
];

// Demo Tasks
export const demoTasks: Task[] = [
  {
    id: 'T001',
    title: 'Follow up with John Smith',
    description: 'Discuss pricing and implementation timeline',
    type: 'call',
    priority: 'high',
    assignedTo: 'Sarah Johnson',
    dueDate: new Date('2024-01-19T10:00:00'),
    status: 'pending',
    leadId: 'L001',
  },
  {
    id: 'T002',
    title: 'Send proposal to Emily Chen',
    description: 'Customized proposal for StartupXYZ',
    type: 'email',
    priority: 'high',
    assignedTo: 'Mike Wilson',
    dueDate: new Date('2024-01-19T14:00:00'),
    status: 'in-progress',
    leadId: 'L002',
  },
  {
    id: 'T003',
    title: 'Product demo meeting',
    description: 'Zoom call with Enterprise Inc team',
    type: 'meeting',
    priority: 'medium',
    assignedTo: 'Sarah Johnson',
    dueDate: new Date('2024-01-20T15:00:00'),
    status: 'pending',
    leadId: 'L003',
  },
  {
    id: 'T004',
    title: 'Weekly team sync',
    description: 'Review pipeline and campaign performance',
    type: 'meeting',
    priority: 'medium',
    assignedTo: 'All',
    dueDate: new Date('2024-01-22T09:00:00'),
    status: 'pending',
  },
];

// Demo Team Members
export const demoTeam: TeamMember[] = [
  {
    id: 'TM001',
    name: 'Sarah Johnson',
    avatar: 'SJ',
    role: 'Senior Sales Rep',
    stats: {
      leadsHandled: 45,
      callsMade: 128,
      messagesSent: 256,
      tasksCompleted: 38,
      conversionRate: 24.5,
    },
  },
  {
    id: 'TM002',
    name: 'Mike Wilson',
    avatar: 'MW',
    role: 'Sales Rep',
    stats: {
      leadsHandled: 38,
      callsMade: 102,
      messagesSent: 198,
      tasksCompleted: 31,
      conversionRate: 21.1,
    },
  },
  {
    id: 'TM003',
    name: 'Jessica Lee',
    avatar: 'JL',
    role: 'Sales Rep',
    stats: {
      leadsHandled: 42,
      callsMade: 115,
      messagesSent: 224,
      tasksCompleted: 35,
      conversionRate: 23.8,
    },
  },
  {
    id: 'TM004',
    name: 'David Chen',
    avatar: 'DC',
    role: 'Junior Sales Rep',
    stats: {
      leadsHandled: 28,
      callsMade: 87,
      messagesSent: 165,
      tasksCompleted: 24,
      conversionRate: 17.9,
    },
  },
];

// Lead Overview Stats
export const leadStats = {
  today: 23,
  thisWeek: 156,
  thisMonth: 642,
  newVsFollowUp: {
    new: 412,
    followUp: 230,
  },
};

// Pipeline Summary
export const pipelineStats = {
  new: 245,
  contacted: 189,
  qualified: 87,
  converted: 52,
  totalValue: 4250000,
  avgDealSize: 81730,
};

// Chart Data - Lead Acquisition Over Time
export const leadAcquisitionData = [
  { month: 'Jul', leads: 145, converted: 28 },
  { month: 'Aug', leads: 198, converted: 42 },
  { month: 'Sep', leads: 256, converted: 55 },
  { month: 'Oct', leads: 287, converted: 61 },
  { month: 'Nov', leads: 312, converted: 68 },
  { month: 'Dec', leads: 345, converted: 74 },
  { month: 'Jan', leads: 402, converted: 89 },
];

// Chart Data - Campaign Performance
export const campaignPerformanceData = [
  { name: 'Email', sent: 18000, delivered: 17500, opened: 8750, clicked: 2625 },
  { name: 'WhatsApp', sent: 12000, delivered: 11800, replied: 5900 },
  { name: 'SMS', sent: 5000, delivered: 4900, clicked: 980 },
];
