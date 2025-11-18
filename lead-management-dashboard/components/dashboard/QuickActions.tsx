import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Mail, Calendar, FileText } from "lucide-react";

const actions = [
  {
    icon: Plus,
    label: "Create Lead",
    description: "Add new lead",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Mail,
    label: "Start Campaign",
    description: "Email or WhatsApp",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    label: "Schedule Meeting",
    description: "Book a call",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    icon: FileText,
    label: "Generate Report",
    description: "Analytics report",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold">{action.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {action.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
