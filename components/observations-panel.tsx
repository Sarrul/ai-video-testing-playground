"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, AlertTriangle, Zap, Layers } from "lucide-react"

const observations = [
  {
    id: 1,
    note: "Output quality degrades with longer prompts",
    type: "warning",
    icon: AlertTriangle,
  },
  {
    id: 2,
    note: "Inconsistent scene transitions detected",
    type: "info",
    icon: Layers,
  },
  {
    id: 3,
    note: "Model struggles with conflicting instructions",
    type: "warning",
    icon: Zap,
  },
]

const typeStyles: Record<string, string> = {
  warning: "border-l-amber-500 bg-amber-500/5",
  info: "border-l-blue-500 bg-blue-500/5",
  error: "border-l-red-500 bg-red-500/5",
}

export function ObservationsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <ClipboardList className="h-5 w-5" />
          Observations / QA Notes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {observations.map((observation) => (
            <div
              key={observation.id}
              className={`flex items-start gap-3 rounded-lg border-l-4 p-3 ${typeStyles[observation.type]}`}
            >
              <observation.icon className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <p className="text-sm">{observation.note}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
