"use client";

import { useState, useEffect } from "react";

type HealthData = {
  time: string;
  heartRate: number;
  spo2: number;
};

type HealthStatus = "normal" | "high" | "low";

const MAX_DATA_POINTS = 20;
const HEART_RATE_NORMAL = { min: 60, max: 100 };
const SPO2_NORMAL = { min: 95, max: 100 };

// Generate a random integer between min and max (inclusive)
const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Generate initial historical data
const generateInitialData = (count: number): HealthData[] => {
  const data: HealthData[] = [];
  const now = new Date();
  for (let i = count - 1; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 5000);
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      heartRate: getRandomInt(65, 85),
      spo2: getRandomInt(96, 99),
    });
  }
  return data;
};

export function useMockHealthData() {
  const [liveData, setLiveData] = useState<HealthData[]>(generateInitialData(MAX_DATA_POINTS));
  const [historicalData] = useState<HealthData[]>(generateInitialData(50).reverse());
  const [currentStatus, setCurrentStatus] = useState<HealthStatus>("normal");

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prevData) => {
        // Simulate a reading: mostly normal, sometimes high or low
        const fluctuation = Math.random();
        let newHeartRate;
        if (fluctuation > 0.95) {
          newHeartRate = getRandomInt(HEART_RATE_NORMAL.max + 1, 120); // High
        } else if (fluctuation < 0.05) {
          newHeartRate = getRandomInt(45, HEART_RATE_NORMAL.min - 1); // Low
        } else {
          newHeartRate = getRandomInt(HEART_RATE_NORMAL.min + 5, HEART_RATE_NORMAL.max - 5); // Normal
        }
        
        const newSpo2 = getRandomInt(SPO2_NORMAL.min, SPO2_NORMAL.max);
        
        const newStatus: HealthStatus =
        newHeartRate > HEART_RATE_NORMAL.max
          ? "high"
          : newHeartRate < HEART_RATE_NORMAL.min
          ? "low"
          : "normal";
          
        setCurrentStatus(newStatus);
        
        const newDataPoint: HealthData = {
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          heartRate: newHeartRate,
          spo2: newSpo2,
        };
        
        const updatedData = [...prevData, newDataPoint];
        if (updatedData.length > MAX_DATA_POINTS) {
          return updatedData.slice(updatedData.length - MAX_DATA_POINTS);
        }
        return updatedData;
      });
    }, 2000); // New data every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return { liveData, historicalData, currentStatus };
}
