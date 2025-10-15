"use client";

import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type ChartData = {
  time: string;
  heartRate: number;
};

type HeartRateChartProps = {
  data: ChartData[];
};

export function HeartRateChart({ data }: HeartRateChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Heart Rate</CardTitle>
        <CardDescription>Live heart rate data (last 20 readings)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            heartRate: {
              label: "BPM",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[250px] w-full"
        >
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <YAxis
              domain={[40, 140]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="heartRate"
              type="monotone"
              stroke="var(--color-heartRate)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
