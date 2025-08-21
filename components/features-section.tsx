"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Bell,
  Users,
  Share2,
  FileBarChart,
  Shield,
} from "lucide-react";

const tasks = [
  {
    title: "Smart prospect discovery",
    subtitle: "Find ideal leads automatically",
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: "Connection automation",
    subtitle: "Send personalized invites",
    icon: <Share2 className="w-4 h-4" />,
  },
  {
    title: "Message sequences",
    subtitle: "Follow-up campaigns that convert",
    icon: <Bell className="w-4 h-4" />,
  },
  {
    title: "Performance tracking",
    subtitle: "Monitor campaign success",
    icon: <FileBarChart className="w-4 h-4" />,
  },
  {
    title: "Account safety",
    subtitle: "Human-like patterns prevent bans",
    icon: <Shield className="w-4 h-4" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="relative w-full py-20 px-4 bg-background text-foreground">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE - Task Loop with Vertical Bar */}
        <div className="relative w-full max-w-sm">
          <Card className="overflow-hidden bg-muted/30 dark:bg-muted/20 backdrop-blur-md shadow-xl rounded-lg">
            <CardContent className="relative h-[320px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="flex flex-col gap-2 absolute w-full"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 14,
                    ease: "linear",
                  }}
                >
                  {[...tasks, ...tasks].map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700 relative"
                    >
                      {/* Icon + Content */}
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 dark:bg-gray-700 w-10 h-10 rounded-xl shadow-md" />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                            <p className="text-xs text-gray-500">{task.subtitle}</p>
                          </div>
                        </div>
                        {task.icon}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Fade effect only inside card */}
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            LinkedIn  &  X Automation
          </Badge>
          <h3 className="text-lg sm:text-md lg:text-2xl font-normal text-gray-900 dark:text-white leading-relaxed">
            Stop manual prospecting {" "}
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-2xl">Born from frustration with manual prospecting. Built for professionals who value their time and need results that matter. Our LinkedIn automation keeps your account safe while finding and engaging with your ideal prospects automatically.</span>
          </h3>

          <div className="flex gap-3 flex-wrap">
            <Badge className="px-4 py-2 text-sm">Account Safe</Badge>
            <Badge className="px-4 py-2 text-sm">No Coding Required</Badge>
            <Badge className="px-4 py-2 text-sm">For Everyone</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}