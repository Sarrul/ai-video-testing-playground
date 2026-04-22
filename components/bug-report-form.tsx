"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Bug, Send } from "lucide-react"

export function BugReportForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [steps, setSteps] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setTitle("")
      setDescription("")
      setSteps("")
      setSubmitted(false)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <Bug className="h-5 w-5" />
          Bug Report
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Brief description of the issue"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Detailed explanation of the bug"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[80px] resize-none"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="steps">Steps to Reproduce</Label>
            <Textarea
              id="steps"
              placeholder="1. Enter prompt&#10;2. Click generate&#10;3. Observe the issue"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="min-h-[80px] resize-none"
            />
          </div>
          <Button type="submit" className="w-full" disabled={submitted}>
            <Send className="mr-2 h-4 w-4" />
            {submitted ? "Report Submitted!" : "Submit Report"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
