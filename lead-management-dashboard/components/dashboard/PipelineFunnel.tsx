"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pipelineStages } from "@/lib/data";

export function PipelineFunnel() {
  const maxCount = Math.max(...pipelineStages.map((s) => s.count));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Lead Pipeline</CardTitle>
        <p className="text-sm text-muted-foreground">
          Distribution across stages
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pipelineStages.map((stage, index) => {
            const width = (stage.count / maxCount) * 100;
            return (
              <div key={stage.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{stage.name}</span>
                  <span className="text-muted-foreground">
                    {stage.count} leads • ${(stage.value / 1000).toFixed(0)}k
                  </span>
                </div>
                <div className="h-10 bg-muted rounded-xl overflow-hidden relative">
                  <div
                    className="h-full rounded-xl transition-all duration-500 flex items-center justify-end px-4 text-white font-semibold text-sm"
                    style={{
                      width: `${width}%`,
                      background: stage.color,
                    }}
                  >
                    {stage.count}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
