import OSSPage from "@/components/oss/OSSPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSS — Saniddhya Dubey",
  description: "Open source contributions — PRs, patches, and fixes across the ecosystem.",
};

export default function Page() {
  return <OSSPage />;
}
