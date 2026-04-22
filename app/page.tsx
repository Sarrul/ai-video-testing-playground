"use client"

import { useState } from "react"
import { PromptInput } from "@/components/prompt-input"
import { VideoOutput } from "@/components/video-output"
import { TestCasesPanel } from "@/components/test-cases-panel"
import { ObservationsPanel } from "@/components/observations-panel"
import { BugReportForm } from "@/components/bug-report-form"
import { FlaskConical } from "lucide-react"

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = (prompt: string) => {
    console.log("[v0] Generating video with prompt:", prompt)
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex items-center gap-3 px-4 py-4">
          <FlaskConical className="h-6 w-6 text-foreground" />
          <h1 className="text-xl font-semibold">AI Video Testing Playground</h1>
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            Internal QA Tool
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Input & Output */}
          <div className="space-y-6 lg:col-span-2">
            <PromptInput onGenerate={handleGenerate} isGenerating={isGenerating} />
            <VideoOutput isGenerating={isGenerating} />
          </div>

          {/* Right Column - Test Cases & Observations */}
          <div className="space-y-6">
            <TestCasesPanel />
            <ObservationsPanel />
          </div>
        </div>

        {/* Bug Report Section */}
        <div className="mt-6">
          <BugReportForm />
        </div>
      </main>
    </div>
  )
}
