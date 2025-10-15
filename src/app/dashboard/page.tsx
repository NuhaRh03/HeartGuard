"use client";

import { useMockHealthData } from "@/hooks/use-mock-health-data";
import { HealthCard } from "@/components/dashboard/health-card";
import { HeartRateChart } from "@/components/dashboard/heart-rate-chart";
import { Spo2Chart } from "@/components/dashboard/spo2-chart";
import { HistoricalDataTable } from "@/components/dashboard/historical-data-table";
import { HealthAlert } from "@/components/dashboard/health-alert";
import { HeartPulse, Droplets } from "lucide-react";

export default function DashboardPage() {
  const { liveData, historicalData, currentStatus } = useMockHealthData();

  const latestData = liveData[liveData.length - 1] || {
    heartRate: 0,
    spo2: 0,
  };

  return (
    <main className="flex-1 overflow-auto p-4 sm:p-6">
      <div className="space-y-6">
        <HealthAlert status={currentStatus} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <HealthCard
            title="Heart Rate"
            value={latestData.heartRate}
            unit="bpm"
            Icon={HeartPulse}
            status={currentStatus}
          />
          <HealthCard
            title="Oxygen Saturation"
            value={latestData.spo2}
            unit="%"
            Icon={Droplets}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <HeartRateChart data={liveData} />
          <Spo2Chart data={liveData} />
        </div>

        <div>
          <HistoricalDataTable data={historicalData} />
        </div>
      </div>
    </main>
  );
}
