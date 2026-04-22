"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FlaskConical, AlertCircle, FileText, Shuffle, HelpCircle } from "lucide-react"

const testCases = [
  {
    id: 1,
    name: "Empty prompt",
    description: "Test behavior with no input provided",
    icon: FileText,
    status: "pending",
  },
  {
    id: 2,
    name: "Very long prompt",
    description: "Test with 500+ character input",
    icon: AlertCircle,
    status: "warning",
  },
  {
    id: 3,
    name: "Conflicting instructions",
    description: "Test with contradictory directives",
    icon: Shuffle,
    status: "error",
  },
  {
    id: 4,
    name: "Nonsensical input",
    description: "Test with random/gibberish text",
    icon: HelpCircle,
    status: "pending",
  },
]

const statusColors: Record<string, string> = {
  pending: "bg-muted text-muted-foreground",
  warning: "bg-amber-500/10 text-amber-600",
  error: "bg-red-500/10 text-red-600",
  success: "bg-green-500/10 text-green-600",
}

export function TestCasesPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <FlaskConical className="h-5 w-5" />
          Test Cases
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {testCases.map((testCase) => (
            <div
              key={testCase.id}
              className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-muted/50"
            >
              <testCase.icon className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{testCase.name}</span>
                  <Badge variant="secondary" className={statusColors[testCase.status]}>
                    {testCase.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{testCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
