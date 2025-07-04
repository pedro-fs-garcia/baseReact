"use client"

import {
  Building2,
  ChevronRight,
  Leaf,
  Mail,
  MessageCircle,
  Moon,
  Phone,
  Settings,
  Sun,
  Sunset,
  User,
  Zap,
  Palette,
  Code,
  Layers,
  Sparkles,
} from "lucide-react"
import Badge from "@/components/ui/badges/Badge"
import Skeleton from "@/components/ui/Skeleton"
import Alert from "@/components/ui/alerts/Alert"
import { useState } from "react"
import { BaseButton } from "@/components/ui/buttons/BaseButton"
import CtaButton from "@/components/ui/buttons/CtaButton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./cards/card"
import Radio from "@/components/ui/inputs/Radio"
import Modal from "@/components/ui/modals/Modal"
import Dropdown from "@/components/ui/inputs/Dropdown"
import Checkbox from "@/components/ui/inputs/Checkbox"
import Toggle from "@/components/ui/inputs/Toggle"
import ProgressBar from "@/components/ui/ProgressBar"
import Tooltip from "@/components/ui/Tooltip"
import CopyText from "./ui/CopyText"

export default function ComponentsDemo() {
  const themes = [
    { name: "Light", icon: <Sun className="text-yellow-400" />, description: "Clean and bright interface" },
    { name: "Dark", icon: <Moon className="text-blue-500" />, description: "Easy on the eyes" },
    { name: "Corporate", icon: <Building2 className="text-gray-700" />, description: "Professional look" },
    { name: "Nature", icon: <Leaf className="text-green-600" />, description: "Organic and fresh" },
    { name: "Sunset", icon: <Sunset className="text-orange-500" />, description: "Warm and inviting" },
  ]

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState("")
  const [toggleValue, setToggleValue] = useState(false)
  const [progressValue] = useState(65)
  const [badges, setBadges] = useState(["React", "TypeScript", "Tailwind"])
  const [tab, setTab] = useState("tab1")

  const dropdownOptions = [
    { value: "user", label: "User", icon: <User size={16} /> },
    { value: "email", label: "Email", icon: <Mail size={16} /> },
    { value: "phone", label: "Phone", icon: <Phone size={16} /> },
    { value: "settings", label: "Settings", icon: <Settings size={16} /> },
  ]

  const radioOptions = [
    { value: "option1", label: "Option 1", description: "Description for option 1" },
    { value: "option2", label: "Option 2", description: "Description for option 2" },
    { value: "option3", label: "Option 3", description: "Description for option 3" },
  ]

  const removeBadge = (badgeToRemove: string) => {
    setBadges(badges.filter((badge) => badge !== badgeToRemove))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            React Base Project
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Building Faster with
            <span className=""> Pre-built Components</span>
          </h1>

          <p className="text-xl text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive React foundation with theme system, UI components, accessibility features and responsive
            design.
          </p>

          <BaseButton 
            variant="outline"
            size="lg"
            leftIcon={<Code size={20} className="mr-2" />}
            rightIcon={<ChevronRight size={20} className="ml-2"/>}
            onClick={() => window.open("https://github.com/pedro-fs-garcia/baseReact")}
          >
            View Documentation
          </BaseButton>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Palette className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Theme System</h3>
              <p className="text-secondary">Multiple pre-built themes with seamless switching capabilities</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Layers className="text-success" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">UI Components</h3>
              <p className="text-secondary">Comprehensive library of reusable and customizable components</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Ready to Use</h3>
              <p className="text-secondary">Accessibility, responsiveness, and animations built-in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Themes */}
      <section className="py-16" id="themes">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Available Themes</h2>
            <p className="text-secondary text-lg">Choose from carefully crafted color schemes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {themes.map((theme) => (
              <Card
                key={theme.name}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-background-100 shadow-md mx-auto mb-4">
                    {theme.icon}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{theme.name}</h3>
                  <p className="text-sm text-secondary">{theme.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Theme Preview Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-md"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Primary Card</h3>
                    <p className="text-sm text-secondary">Example card component</p>
                  </div>
                </div>
                <p className="text-tertiary text-sm leading-relaxed">
                  This card demonstrates the theme system colors with smooth transitions and hover effects.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-4">Semantic States</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-success text-sm font-medium">Success State</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span className="text-warning text-sm font-medium">Warning State</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-error rounded-full"></div>
                    <span className="text-error text-sm font-medium">Error State</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-info rounded-full"></div>
                    <span className="text-info text-sm font-medium">Info State</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-4">Glass Effect</h3>
                <p className="text-secondary text-sm">
                  Card with glass effect using backdrop-filter and transparency for modern aesthetics.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gradient Showcase */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="font-bold text-xl mb-3">Primary Gradient</h3>
              <p className="text-white/90">Beautiful gradient using primary theme colors for impactful sections.</p>
            </div>
            <div className="bg-gradient-warm rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="font-bold text-xl mb-3">Warm Gradient</h3>
              <p className="text-white/90">Warm gradient using accent colors for engaging call-to-action areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UI Components Showcase */}
      <section className="py-16 bg-card/30" id="ui-components">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">UI Components Library</h2>
            <p className="text-secondary text-lg">Reusable and customizable components to accelerate development</p>
          </div>

          <div className="space-y-12">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">B</span>
                  </div>
                  Buttons
                </CardTitle>
                <CardDescription>Various button styles and states for different use cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 items-center">
                  <BaseButton variant="primary" size="md" leftIcon={<User size={16} />}>
                    Primary Button
                  </BaseButton>
                  <BaseButton variant="secondary" size="md">
                    Secondary
                  </BaseButton>
                  <BaseButton variant="outline" size="md">
                    Outline
                  </BaseButton>
                  <BaseButton variant="ghost" size="md">
                    Ghost
                  </BaseButton>
                  <BaseButton variant="danger" size="md">
                    Danger
                  </BaseButton>
                  <CtaButton text="Call to Action" primaryIcon secondaryIcon />
                  <a
                    href="https://wa.me/5512999999999?text=Hello! I'd like to know more."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-semibold transition-all duration-200 select-none focus:outline-none focus-ring px-4 py-2 text-base rounded-lg text-white"
                    style={{ background: "linear-gradient(90deg, #25D366 0%, #128C7E 100%)" }}
                  >
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>Organize content into switchable sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={tab} onValueChange={setTab}>
                  <TabsList>
                    <TabsTrigger value="tab1">
                      <Sun className="mr-2" size={16} />
                      Light Theme
                    </TabsTrigger>
                    <TabsTrigger value="tab2">
                      <Moon className="mr-2" size={16} />
                      Dark Theme
                    </TabsTrigger>
                    <TabsTrigger value="tab3">
                      <Zap className="mr-2" size={16} />
                      Accent
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-4">
                    <p className="text-secondary">
                      Light theme content. Use tabs to switch between different content sections with smooth animations.
                    </p>
                  </TabsContent>
                  <TabsContent value="tab2" className="mt-4">
                    <p className="text-secondary">
                      Dark theme content. Tabs are fully styled with the theme system for consistent appearance.
                    </p>
                  </TabsContent>
                  <TabsContent value="tab3" className="mt-4">
                    <p className="text-secondary">
                      Accent content. You can add any content inside tabs with full theme support.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Form Components Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Dropdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Dropdown</CardTitle>
                  <CardDescription>Select from a list of options with icons</CardDescription>
                </CardHeader>
                <CardContent>
                  <Dropdown
                    options={dropdownOptions}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    placeholder="Select an option"
                    label="Dropdown with icons"
                  />
                </CardContent>
              </Card>

              {/* Modal */}
              <Card>
                <CardHeader>
                  <CardTitle>Modal</CardTitle>
                  <CardDescription>Overlay dialogs with smooth animations</CardDescription>
                </CardHeader>
                <CardContent>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Open Modal
                  </button>
                  <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Example Modal" size="md">
                    <p className="text-secondary mb-4">
                      This is an example of a reusable modal with smooth animations and theme integration.
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setModalOpen(false)}
                        className="px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setModalOpen(false)}
                        className="px-4 py-2 bg-background-100 text-secondary border border-medium rounded-lg hover:bg-background-200 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </Modal>
                </CardContent>
              </Card>
            </div>

            {/* Input Components */}
            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>Interactive form elements with validation states</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-secondary mb-4">Checkbox</h4>
                    <Checkbox
                      checked={checkboxValue}
                      onChange={setCheckboxValue}
                      label="Accept terms and conditions"
                      description="You agree to our terms of use"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary mb-4">Radio Group</h4>
                    <Radio options={radioOptions} value={radioValue} onChange={setRadioValue} name="example-radio" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Toggle */}
            <Card>
              <CardHeader>
                <CardTitle>Toggle Switch</CardTitle>
                <CardDescription>Modern toggle switches for settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Toggle
                  checked={toggleValue}
                  onChange={setToggleValue}
                  label="Push notifications"
                  description="Receive real-time notifications"
                />
              </CardContent>
            </Card>

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

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Labels and tags with various styles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-3">Variants</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="primary">Primary</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="error">Error</Badge>
                      <Badge variant="info">Info</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-3">Sizes</h4>
                    <div className="flex flex-wrap gap-3 items-center">
                      <Badge variant="primary" size="lg" rounded>
                        Large Rounded
                      </Badge>
                      <Badge variant="success" size="sm">
                        Small
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-3">Removable Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      {badges.map((badge) => (
                        <Badge key={badge} variant="primary" removable onRemove={() => removeBadge(badge)}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Copy Text */}
            <Card>
              <CardHeader>
                <CardTitle>Copy Text</CardTitle>
                <CardDescription>Click to copy text with visual feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <CopyText text="npx create-react-app baseReact" />
                  <CopyText text="yarn install && yarn dev" />
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>Contextual feedback messages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert type="success" title="Success!" closable>
                    Operation completed successfully.
                  </Alert>
                  <Alert type="warning" title="Warning!" closable>
                    Please verify the data before continuing.
                  </Alert>
                  <Alert type="error" title="Error!" closable>
                    An error occurred while processing the request.
                  </Alert>
                  <Alert type="info" title="Information" closable>
                    This is an informational message.
                  </Alert>
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
