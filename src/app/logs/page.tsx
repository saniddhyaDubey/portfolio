import LogTimeline from "@/components/logs/LogTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logs — Saniddhya Dubey",
  description: "Small wins, tech learnings, and daily notes.",
};

export default function LogsPage() {
  return <LogTimeline />;
}
