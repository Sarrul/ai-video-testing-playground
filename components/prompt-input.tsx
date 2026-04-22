"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

interface PromptInputProps {
  onGenerate: (prompt: string) => void
  isGenerating: boolean
}

export function PromptInput({ onGenerate, isGenerating }: PromptInputProps) {
  const [prompt, setPrompt] = useState("")

  const handleSubmit = () => {
    onGenerate(prompt)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Prompt Input</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Enter a prompt to generate a video (e.g., 'A cinematic shot of a robot walking in the rain')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] resize-none"
        />
        <Button onClick={handleSubmit} disabled={isGenerating} className="w-full">
          <Play className="mr-2 h-4 w-4" />
          {isGenerating ? "Generating..." : "Generate Video"}
        </Button>
      </CardContent>
    </Card>
  )
}
