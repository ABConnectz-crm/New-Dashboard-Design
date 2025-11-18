import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/lib/data";
import { TrendingUp } from "lucide-react";

export function TeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Team Performance</CardTitle>
        <p className="text-sm text-muted-foreground">
          Top performers this month
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors"
            >
              <div className="flex-shrink-0">
                <Avatar className="h-12 w-12">
                  <AvatarFallback style={{ backgroundColor: member.color, color: "white" }}>
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold truncate">{member.name}</p>
                  {index === 0 && (
                    <Badge variant="secondary" className="text-xs">
                      🏆 Top
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-sm font-bold text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  {member.leadsConverted}
                </div>
                <p className="text-xs text-muted-foreground">Converted</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
