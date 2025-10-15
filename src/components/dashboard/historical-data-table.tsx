import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type HealthData = {
  time: string;
  heartRate: number;
  spo2: number;
};

type HistoricalDataTableProps = {
  data: HealthData[];
};

export function HistoricalDataTable({ data }: HistoricalDataTableProps) {
  const getStatus = (heartRate: number) => {
    if (heartRate > 100) return <Badge variant="destructive">High</Badge>;
    if (heartRate < 60) return <Badge variant="secondary" className="bg-yellow-400 text-black">Low</Badge>;
    return <Badge className="bg-green-500 hover:bg-green-600">Normal</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Measurement History</CardTitle>
        <CardDescription>
          A log of your recent health measurements.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[400px] overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead className="text-right">Heart Rate (bpm)</TableHead>
                <TableHead className="text-right">SpO₂ (%)</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((reading, index) => (
                <TableRow key={index}>
                  <TableCell>{reading.time}</TableCell>
                  <TableCell className="text-right font-medium">
                    {reading.heartRate}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {reading.spo2}
                  </TableCell>
                  <TableCell className="text-center">
                    {getStatus(reading.heartRate)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
