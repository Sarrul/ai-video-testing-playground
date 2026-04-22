"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from "lucide-react"

interface VideoOutputProps {
  isGenerating: boolean
}

export function VideoOutput({ isGenerating }: VideoOutputProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Generated Output</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
          {isGenerating ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted-foreground/20 border-t-muted-foreground" />
                <span className="text-sm text-muted-foreground">Generating video...</span>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <video
                className="h-full w-full object-cover"
                controls
                poster=""
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {!isGenerating && (
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-background/80 px-2 py-1 text-xs backdrop-blur-sm">
              <Video className="h-3 w-3" />
              <span>Sample Output</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
