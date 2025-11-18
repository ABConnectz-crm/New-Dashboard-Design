import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    trend: "up" | "down";
  };
  icon: LucideIcon;
  subtitle?: string;
  gradient?: string;
}

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  subtitle,
  gradient = "from-primary to-secondary",
}: MetricCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          {change && (
            <div
              className={`flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full ${
                change.trend === "up"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {change.trend === "up" ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{change.value}%</span>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            {title}
          </h3>
          <div className="text-3xl font-bold text-foreground mb-1">
            {typeof value === "number" ? value.toLocaleString() : value}
          </div>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
