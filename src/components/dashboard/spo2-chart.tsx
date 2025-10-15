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
  spo2: number;
};

type Spo2ChartProps = {
  data: ChartData[];
};

export function Spo2Chart({ data }: Spo2ChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Oxygen Saturation (SpO₂)</CardTitle>
        <CardDescription>
          Live oxygen saturation data (last 20 readings)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            spo2: {
              label: "%",
              color: "hsl(var(--chart-2))",
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
              domain={[90, 100]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="spo2"
              type="monotone"
              stroke="var(--color-spo2)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
