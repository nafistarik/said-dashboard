'use client'

import * as React from "react"
// import {  Search } from 'lucide-react'
import propic from "@/assets/images/propic.jpg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import Image from "next/image"

// Sample data with more content
const sidebarMessages = [
  {
    id: 1,
    name: "Budi Suharsono",
    avatar: propic,
    lastMessage: "Hey Emil, jangan lupa ya buat meeti...",
    time: "12:30 Am",
    role: "HR Lead"
  },
  {
    id: 2,
    name: "Sarah Chen",
    avatar: propic,
    lastMessage: "The project timeline looks good...",
    time: "11:45 Am",
    role: "Project Manager"
  },
  {
    id: 3,
    name: "Alex Thompson",
    avatar: propic,
    lastMessage: "Can we schedule a call to discuss...",
    time: "11:30 Am",
    role: "Sales Lead"
  },
  {
    id: 4,
    name: "Maria Garcia",
    avatar: propic,
    lastMessage: "The client feedback is positive...",
    time: "11:15 Am",
    role: "Account Manager"
  },
  {
    id: 5,
    name: "James Wilson",
    avatar: propic,
    lastMessage: "Updates on the latest features...",
    time: "11:00 Am",
    role: "Tech Lead"
  },
  {
    id: 6,
    name: "Maria Garcia",
    avatar: propic,
    lastMessage: "The client feedback is positive...",
    time: "11:15 Am",
    role: "Account Manager"
  },
]

const chatMessages = [
  {
    id: 1,
    content: "Yes! We provide reliable after-sales support to ensure a smooth experience, including assistance, troubleshooting, and customer service.",
    sender: "Budi Suharsono",
    role: "HR Lead",
    avatar: propic,
    time: "12:30 Am",
    type: "received"
  },
  {
    id: 2,
    content: "Yes! We provide reliable after-sales support to ensure a smooth experience, including assistance, troubleshooting, and customer service.",
    sender: "Budi Suharsono",
    role: "HR Lead",
    avatar: propic,
    time: "12:30 Am",
    type: "sent"
  },
  {
    id: 3,
    content: "Yes! We provide reliable after-sales support to ensure a smooth experience, including assistance, troubleshooting, and customer service.",
    sender: "Budi Suharsono",
    role: "HR Lead",
    avatar: propic,
    time: "12:30 Am",
    type: "received"
  },
  {
    id: 4,
    content: "Yes! We provide reliable after-sales support to ensure a smooth experience, including assistance, troubleshooting, and customer service.",
    sender: "Budi Suharsono",
    role: "HR Lead",
    avatar: propic,
    time: "12:30 Am",
    type: "sent"
  }
]

export function ChatInterface() {
  const [message, setMessage] = React.useState("")
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const chatContainerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [])

  const MessagesList = () => (
    <div className="flex h-full w-full flex-col border-r ">
      
      <div className="px-4">
        {/* <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search Name"
            className="pl-9 rounded-md border border-gray-200"
          />
        </div> */}
        
        <div className="font-bold mb-2 text-lg pt-16 md:pt-0">All Messages</div>
      </div>

      <div className="flex-1 overflow-auto table-scrollbar ">
        {sidebarMessages.map((msg) => (
          <div
            key={msg.id}
            className="flex cursor-pointer items-center gap-3 px-4 py-3 hover:bg-gray-100"
          >
            <Image
            width={1000}
            height={1000}
              src={msg.avatar || "/placeholder.svg"}
              alt="propic"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-medium">{msg.name}</span>
                </div>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              <p className="truncate text-sm text-gray-600">
                {msg.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="flex h-[calc(100vh-160px)] pt-12">
      {/* Desktop Messages List */}
      <div className="hidden w-[320px]  md:block py-4">
        <MessagesList />
      </div>

      {/* Mobile Messages List */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-[80%] p-0 border-r ">
          <MessagesList />
        </SheetContent>
      </Sheet>

      {/* Chat Area */}
      <div className="relative flex flex-1 flex-col  ">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 -top-14 md:hidden bg-gray-50 hover:bg-gray-100 transition duration-300 ease-in-out font-bold w-36 text-customBlue hover:text-customBlue"
          onClick={() => setIsSidebarOpen(true)}
        >
          View Conversation
        </Button>

        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-auto p-4 table-scrollbar"
        >
          <div className="space-y-4">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${
                  msg.type === "sent" ? "flex-row-reverse" : ""
                }`}
              >
                <Image
                  src={msg.avatar || "/placeholder.svg"}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <div className={`flex items-center gap-2 mb-1 ${
                    msg.type === "sent" ? "flex-row-reverse" : ""
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{msg.sender}</span>
                    </div>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.type === "sent"
                        ? "bg-[#E8F7FF] ml-auto"
                        : "bg-[#E8F7FF]"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t py-4 pl-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (message.trim()) {
                // Handle message send
                setMessage("")
              }
            }}
            className="flex gap-2"
          >
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="flex-1"
            />
            <Button 
              type="submit"
              className="bg-customBlue text-white hover:bg-customButtonHoverBlue"
            >
              <span>Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}