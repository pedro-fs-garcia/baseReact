"use client"

import {
  Building2,
  Leaf,
  Moon,
  Sun,
  Sunset,
} from "lucide-react"
import Skeleton from "@/components/ui/Skeleton"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./cards/card"
import ProgressBar from "@/components/ui/ProgressBar"
import Tooltip from "@/components/ui/Tooltip"

export default function ComponentsDemo() {
  const themes = [
    { name: "Light", icon: <Sun className="text-yellow-400" />, description: "Clean and bright interface" },
    { name: "Dark", icon: <Moon className="text-blue-500" />, description: "Easy on the eyes" },
    { name: "Corporate", icon: <Building2 className="text-gray-700" />, description: "Professional look" },
    { name: "Nature", icon: <Leaf className="text-green-600" />, description: "Organic and fresh" },
    { name: "Sunset", icon: <Sunset className="text-orange-500" />, description: "Warm and inviting" },
  ]

  const [progressValue] = useState(65)

  return (
    <div className="min-h-screen bg-background">
      {/* UI Components Showcase */}
      <section className="py-16 bg-card/30" id="ui-components">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">UI Components Library</h2>
            <p className="text-secondary text-lg">Reusable and customizable components to accelerate development</p>
          </div>

          <div className="space-y-12">

            {/* Progress Bars */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Indicators</CardTitle>
                <CardDescription>Visual progress representation with different variants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <ProgressBar value={progressValue} label="Project progress" showPercentage variant="success" />
                  <ProgressBar value={80} label="Success state" variant="success" size="lg" />
                  <ProgressBar value={45} label="Warning state" variant="warning" />
                  <ProgressBar value={20} label="Error state" variant="error" />
                </div>
              </CardContent>
            </Card>

            {/* Tooltips */}
            <Card>
              <CardHeader>
                <CardTitle>Tooltips</CardTitle>
                <CardDescription>Contextual information on hover</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Tooltip content="Additional information about this button">
                    <button className="px-4 py-2 bg-primary text-on-primary rounded-lg">Hover me</button>
                  </Tooltip>
                  <Tooltip content="Tooltip on the right" position="right">
                    <button className="px-4 py-2 bg-secondary text-on-primary rounded-lg">Right tooltip</button>
                  </Tooltip>
                  <Tooltip content="Tooltip on the left" position="left">
                    <button className="px-4 py-2 bg-accent text-on-primary rounded-lg">Left tooltip</button>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>

            {/* Skeleton Loaders */}
            <Card>
              <CardHeader>
                <CardTitle>Skeleton Loaders</CardTitle>
                <CardDescription>Loading placeholders for better UX</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-3">Text Skeleton</h4>
                    <div className="space-y-2">
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="80%" />
                      <Skeleton variant="text" width="60%" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-3">Profile Skeleton</h4>
                    <div className="flex gap-4">
                      <Skeleton variant="circular" width={40} height={40} />
                      <div className="flex-1 space-y-2">
                        <Skeleton variant="text" width="100%" />
                        <Skeleton variant="text" width="70%" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-3">Card Skeleton</h4>
                    <Skeleton variant="rectangular" width="100%" height={120} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
