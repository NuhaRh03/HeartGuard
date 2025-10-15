import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

type HealthAlertProps = {
  status: "normal" | "high" | "low";
};

export function HealthAlert({ status }: HealthAlertProps) {
  if (status === "normal") {
    return null;
  }

  const title = status === "high" ? "High Heart Rate Alert" : "Low Heart Rate Alert";
  const description =
    status === "high"
      ? "Your heart rate is above the normal range. Please rest and monitor. If it persists, consider consulting a professional."
      : "Your heart rate is below the normal range. If you feel unwell, please consult a professional.";

  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
