"use client"

import * as React from "react"
import { Bell, X } from "lucide-react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NotificationItem {
  id: string
  user: string
  avatarUrl?: string
  message: string
  time: string
}

interface NotificationsProps {
  items?: NotificationItem[]
}

const defaultNotifications: NotificationItem[] = [
  {
    id: "1",
    user: "Alice",
    avatarUrl: "https://i.pravatar.cc/40?img=1",
    message: "Sent you a message.",
    time: "2m ago",
  },
  {
    id: "2",
    user: "Bob",
    avatarUrl: "https://i.pravatar.cc/40?img=2",
    message: "Commented on your post.",
    time: "10m ago",
  },
]

export default function AvatarNotifications({ items = defaultNotifications }: NotificationsProps) {
  const [notifications, setNotifications] = React.useState(items)

  const clearAll = () => {
    setNotifications([])
  }

  const hasNotifications = notifications.length > 0

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="relative rounded-full"
          aria-label="Open notifications"
        >
          <Bell size={16} strokeWidth={2} aria-hidden="true" />
          {/* Blinking / static status dot */}
          {hasNotifications && (
            <span className="absolute right-0 top-0 flex h-3 w-3 translate-x-1/2 -translate-y-1/2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
            </span>
          )}
        </Button>
      </PopoverTrigger>
      {/* Align popover to the center of the icon */}
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold">Notifications</h2>
            {hasNotifications && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {notifications.length}
              </span>
            )}
          </div>
          {hasNotifications && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs font-medium hover:bg-transparent"
              onClick={clearAll}
            >
              Clear all
            </Button>
          )}
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-sm text-muted-foreground">No messages</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {notifications.map((item) => (
                <div key={item.id} className="flex gap-3 p-4 transition-colors hover:bg-muted/50">
                  <Avatar className="h-9 w-9">
                    {item.avatarUrl ? (
                      <AvatarImage src={item.avatarUrl} alt={item.user} />
                    ) : (
                      <AvatarFallback>{item.user[0]}</AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{item.user}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.message}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
