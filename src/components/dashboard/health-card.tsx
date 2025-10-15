import type { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type HealthCardProps = {
  title: string;
  value: number;
  unit: string;
  Icon: LucideIcon;
  status?: "normal" | "high" | "low";
};

export function HealthCard({
  title,
  value,
  unit,
  Icon,
  status = "normal",
}: HealthCardProps) {
  const statusColor =
    status === "high"
      ? "text-destructive"
      : status === "low"
      ? "text-yellow-500"
      : "text-primary";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn("h-5 w-5 text-muted-foreground", title === "Heart Rate" && statusColor)} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value}
          <span className="text-base font-normal text-muted-foreground ml-1">
            {unit}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Real-time measurement
        </p>
      </CardContent>
    </Card>
  );
}
