import React from "react";
import HeroCRMInterface from "@/components/HeroCRMInterface";
import OneInboxSection from "@/components/OneInboxSection";
import WorkflowVisualizer from "@/components/WorkflowVisualizer";
import AutomationBuilder from "@/components/AutomationBuilder";
import AnalyticsMetrics from "@/components/AnalyticsMetrics";
import GradixIndustriesSection from "@/components/GradixIndustriesSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Clear, Spacious Hero with Interactive 3-Panel CRM */}
      <HeroCRMInterface />

      {/* 2. One Number Shared Team Inbox */}
      <OneInboxSection />

      {/* 3. 4-Step Visual Workflow */}
      <WorkflowVisualizer />

      {/* 4. Customer Feedback & Stories */}
      <AutomationBuilder />

      {/* 5. Minimal Results & Metrics */}
      <AnalyticsMetrics />

      {/* 6. Tailored Industry Solutions */}
      <GradixIndustriesSection />
    </div>
  );
}
