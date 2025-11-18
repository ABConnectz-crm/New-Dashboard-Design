import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { todayTasks } from "@/lib/data";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export function TasksList() {
  const priorityColors = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
    low: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Today's Tasks</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {todayTasks.filter((t) => !t.completed).length} pending
            </p>
          </div>
          <button className="text-sm font-medium text-primary hover:underline">
            View All
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {todayTasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
                task.completed
                  ? "bg-muted/50 border-border/50 opacity-60"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              <div className="flex-shrink-0 pt-0.5">
                {task.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-medium ${
                    task.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {task.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    className={`text-xs ${priorityColors[task.priority]}`}
                  >
                    {task.priority.toUpperCase()}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {task.dueDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
