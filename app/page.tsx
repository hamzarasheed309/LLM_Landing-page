"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Settings,
  Layers,
  MessageSquare,
  BookOpen,
  Grid,
  MoreVertical,
  Send,
  Moon,
  Sun,
  Zap,
} from "lucide-react"
import { useTheme } from "next-themes"
import { CircuitPattern } from "@/components/circuit-pattern"
import { HexGrid } from "@/components/hex-grid"
import { TechCircle } from "@/components/tech-circle"
import { RobotAssistant } from "@/components/robot-assistant"

export default function ChatUI() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [robotActive, setRobotActive] = useState(false)

  // Ensure theme component doesn't render until mounted on client
  useEffect(() => {
    setMounted(true)

    // Activate robot after a short delay for a nice entrance effect
    setTimeout(() => setRobotActive(true), 500)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <div className="relative flex h-screen overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-[#f7f8fa] to-[#e6f0ff] dark:from-[#0a1128] dark:via-[#121a2d] dark:to-[#0d1b3a]">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <CircuitPattern />
      </div>

      {/* Left Sidebar */}
      <div className="relative z-10 w-64 border-r border-[#e3e6ea]/50 dark:border-[#2d2d2d]/50 flex flex-col backdrop-blur-sm bg-white/70 dark:bg-[#121a2d]/70">
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#2388ff]/0 via-[#2388ff]/30 to-[#2388ff]/0"></div>

        {/* User Profile */}
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-2 interactive">
            <Avatar className="h-8 w-8 ring-2 ring-[#2388ff]/20">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Mauro Sicard" />
              <AvatarFallback className="bg-gradient-to-br from-[#2388ff] to-[#0070f3]">MS</AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm dark:text-white">Mauro Sicard</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 dark:text-gray-400 dark:hover:text-white hover:bg-[#2388ff]/10 interactive"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 dark:text-gray-400 dark:hover:text-white hover:bg-[#2388ff]/10 interactive"
            >
              <Layers className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="px-3 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-[#666f8d] dark:text-gray-400" />
            <Input
              placeholder="Search for chats..."
              className="pl-8 pr-8 py-2 h-9 bg-white/80 dark:bg-[#1a2236]/80 dark:text-white dark:border-[#444]/30 text-sm backdrop-blur-sm border-[#e3e6ea] focus:border-[#2388ff] transition-colors interactive"
            />
            <div className="absolute right-2 top-2 bg-[#f0f2f5] dark:bg-[#2d3748] px-1.5 rounded text-xs text-[#666f8d] dark:text-gray-400">
              K
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-2">
          <div className="flex items-center px-3 py-2 bg-gradient-to-r from-[#2388ff] to-[#0070f3] text-white relative overflow-hidden interactive">
            <div className="absolute inset-0 opacity-20">
              <HexGrid />
            </div>
            <MessageSquare className="h-4 w-4 mr-3 relative z-10" />
            <span className="text-sm relative z-10">Chats</span>
            <div className="ml-auto bg-white/20 backdrop-blur-sm px-1.5 rounded text-xs text-white relative z-10">
              1
            </div>
          </div>
          <div className="flex items-center px-3 py-2 text-[#666f8d] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            <BookOpen className="h-4 w-4 mr-3" />
            <span className="text-sm">Library</span>
            <div className="ml-auto bg-[#f0f2f5] dark:bg-[#2d3748] px-1.5 rounded text-xs">2</div>
          </div>
          <div className="flex items-center px-3 py-2 text-[#666f8d] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            <Grid className="h-4 w-4 mr-3" />
            <span className="text-sm">Apps</span>
            <div className="ml-auto bg-[#f0f2f5] dark:bg-[#2d3748] px-1.5 rounded text-xs">3</div>
          </div>
        </div>

        {/* Pinned */}
        <div className="mt-4">
          <div className="px-3 py-1">
            <span className="text-xs font-medium text-[#bac0cc] dark:text-gray-500">PINNED</span>
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            Python code optimization tips
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            React component architecture
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            Data visualization best practices...
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            Machine learning model training...
          </div>
        </div>

        {/* Chat History */}
        <div className="mt-4">
          <div className="px-3 py-1">
            <span className="text-xs font-medium text-[#bac0cc] dark:text-gray-500">CHAT HISTORY</span>
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            JavaScript async functions
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            SQL query performance tuning...
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            Docker container networking
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            CSS Grid vs Flexbox layouts
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            API authentication methods...
          </div>
          <div className="px-3 py-2 text-sm text-[#353e5c] dark:text-gray-300 hover:bg-[#f0f2f5]/70 dark:hover:bg-[#1a2236]/70 transition-colors interactive">
            Git workflow strategies
          </div>
        </div>

        {/* Start New Chat Button */}
        <div className="mt-auto p-3">
          <Button className="w-full bg-gradient-to-r from-[#2388ff] to-[#0070f3] hover:from-[#2388ff]/90 hover:to-[#0070f3]/90 shadow-md shadow-[#2388ff]/20 dark:shadow-[#2388ff]/10 transition-all hover:shadow-lg hover:shadow-[#2388ff]/30 interactive">
            <span className="mr-2">+</span> Start new chat
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col backdrop-blur-sm bg-white/50 dark:bg-[#121a2d]/50">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-[#e3e6ea]/50 dark:border-[#2d2d2d]/50 backdrop-blur-sm bg-white/70 dark:bg-[#121a2d]/70">
          <h1 className="text-lg font-medium dark:text-white flex items-center">
            <Zap className="h-4 w-4 mr-2 text-[#2388ff]" /> Chats
          </h1>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 rounded-full hover:bg-[#2388ff]/10 transition-colors interactive"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-[#666f8d]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-[#666f8d] dark:text-gray-400" />
              <Input
                placeholder="Search for chats..."
                className="pl-8 pr-8 py-2 h-9 bg-white/80 dark:bg-[#1a2236]/80 dark:text-white dark:border-[#444]/30 text-sm backdrop-blur-sm border-[#e3e6ea] focus:border-[#2388ff] transition-colors interactive"
              />
              <div className="absolute right-2 top-2 bg-[#f0f2f5] dark:bg-[#2d3748] px-1.5 rounded text-xs text-[#666f8d] dark:text-gray-400">
                K
              </div>
            </div>
            <Button className="bg-gradient-to-r from-[#2388ff] to-[#0070f3] hover:from-[#2388ff]/90 hover:to-[#0070f3]/90 shadow-md shadow-[#2388ff]/20 dark:shadow-[#2388ff]/10 transition-all hover:shadow-lg hover:shadow-[#2388ff]/30 interactive">
              <span className="mr-1">+</span> New chat
            </Button>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="p-6">
          <div className="max-w-3xl mx-auto bg-white/80 dark:bg-[#1a2236]/80 rounded-lg p-8 shadow-lg shadow-[#2388ff]/5 dark:shadow-[#2388ff]/10 backdrop-blur-sm border border-[#e3e6ea]/50 dark:border-[#2d2d2d]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 dark:opacity-20">
              <TechCircle />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Robot Assistant */}
              <div
                className={`w-40 h-40 transition-all duration-700 ease-out ${robotActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} relative interactive`}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center px-2 py-1 rounded-full bg-[#2388ff]/10 dark:bg-[#2388ff]/20 text-[#2388ff] dark:text-[#60a5fa] animate-pulse">
                  Click me!
                </div>
                <RobotAssistant />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-medium text-center md:text-left mb-1 dark:text-white">
                  Welcome back, Mauro
                </h2>
                <p className="text-center md:text-left text-[#666f8d] dark:text-gray-400 mb-6">
                  Your AI assistant is ready to help with coding, research, and more
                </p>

                <div className="relative">
                  <Input
                    placeholder="How can I help you?"
                    className="rounded-r-none border-r-0 dark:bg-[#121a2d]/80 dark:text-white dark:border-[#444]/30 backdrop-blur-sm border-[#e3e6ea] focus:border-[#2388ff] transition-colors pr-10 interactive"
                  />
                  <Button className="rounded-l-none bg-gradient-to-r from-[#2388ff] to-[#0070f3] hover:from-[#2388ff]/90 hover:to-[#0070f3]/90 shadow-md shadow-[#2388ff]/20 dark:shadow-[#2388ff]/10 transition-all hover:shadow-lg hover:shadow-[#2388ff]/30 interactive">
                    <Send className="h-4 w-4" />
                  </Button>
                  <div className="absolute inset-0 pointer-events-none rounded-md ring-1 ring-[#2388ff]/20 dark:ring-[#2388ff]/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat List Header */}
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-medium dark:text-white">Chats</h2>
            <span className="text-[#666f8d] dark:text-gray-400 text-sm">(56)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-[#666f8d] dark:text-gray-400" />
              <Input
                placeholder="Search for chats..."
                className="pl-8 py-2 h-9 bg-white/80 dark:bg-[#1a2236]/80 dark:text-white dark:border-[#444]/30 text-sm backdrop-blur-sm border-[#e3e6ea] focus:border-[#2388ff] transition-colors interactive"
              />
            </div>
            <Button
              variant="outline"
              className="gap-1 text-sm h-9 dark:text-white dark:border-[#444]/30 dark:bg-[#1a2236]/80 backdrop-blur-sm border-[#e3e6ea] hover:border-[#2388ff]/50 transition-colors interactive"
            >
              Model
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Button>
            <Button
              variant="outline"
              className="gap-1 text-sm h-9 dark:text-white dark:border-[#444]/30 dark:bg-[#1a2236]/80 backdrop-blur-sm border-[#e3e6ea] hover:border-[#2388ff]/50 transition-colors interactive"
            >
              Sort by
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Chat List */}
        <div className="px-6 pb-6 overflow-auto">
          <ChatItem
            message="How to implement authentication in a Next.js app?"
            model="GPT 4"
            messageCount="24"
            time="1 min ago"
          />
          <ChatItem
            message="Explain the differences between SQL and NoSQL"
            model="Llama 2"
            messageCount="13"
            time="5 min ago"
          />
          <ChatItem
            message="Generate a Python script to analyze CSV data and create charts"
            model="Mistral 8×7B"
            messageCount="4"
            time="22 min ago"
          />
          <ChatItem
            message="What are the best practices for React state management?"
            model="GPT 3.5"
            messageCount="20"
            time="1 hr ago"
          />
          <ChatItem message="Can you help debug this" time="1 hr ago" />
          <ChatItem
            message="Can you help debug this JavaScript code that's causing memory leaks?"
            model="GPT 4"
            messageCount="18"
            time="2 hrs ago"
          />
          <ChatItem
            message="Write a Docker compose file for a MERN stack app"
            model="Llama 2"
            messageCount="7"
            time="2 hrs ago"
          />
          <ChatItem
            message="Explain how transformers work in natural language processing"
            model="Mistral 7B"
            messageCount="12"
            time="3 hrs ago"
          />
        </div>
      </div>
    </div>
  )
}

function ChatItem({ message, model, messageCount, time }) {
  return (
    <div className="bg-white/80 dark:bg-[#1a2236]/80 rounded-lg p-4 mb-3 flex items-center justify-between shadow-md shadow-[#2388ff]/5 dark:shadow-[#2388ff]/10 backdrop-blur-sm border border-[#e3e6ea]/50 dark:border-[#2d2d2d]/30 hover:shadow-lg hover:shadow-[#2388ff]/10 dark:hover:shadow-[#2388ff]/20 transition-all hover:border-[#2388ff]/20 dark:hover:border-[#2388ff]/10 group interactive">
      <div className="text-[#353e5c] dark:text-gray-200 group-hover:text-[#2388ff]/90 dark:group-hover:text-[#2388ff]/90 transition-colors">
        {message}
      </div>
      <div className="flex items-center gap-4">
        {model && (
          <div className="text-sm font-medium dark:text-white bg-gradient-to-r from-[#2388ff]/10 to-[#0070f3]/10 dark:from-[#2388ff]/20 dark:to-[#0070f3]/20 px-2 py-1 rounded-full">
            {model}
          </div>
        )}
        {messageCount && (
          <div className="flex items-center gap-1 text-[#666f8d] dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>{messageCount}</span>
          </div>
        )}
        <div className="flex items-center gap-1 text-[#666f8d] dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{time}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 dark:text-gray-400 dark:hover:text-white hover:bg-[#2388ff]/10 transition-colors interactive"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

