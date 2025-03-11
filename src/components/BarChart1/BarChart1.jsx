"use client";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", thisYear: 80, prevYear: 186 },
  { month: "February", thisYear: 200, prevYear: 305 },
  { month: "March", thisYear: 120, prevYear: 237 },
  { month: "April", thisYear: 190, prevYear: 73 },
  { month: "May", thisYear: 200, prevYear: 230 },
  { month: "June", thisYear: 140, prevYear: 220 },
];

const chartConfig = {
  thisYear: {
    label: "2024",
    color: "#60a5fa",
  },
  prevYear: {
    label: "2025",
    color: "#2563eb",
  },
};

const BarChart1 = () => {
  return (
    <>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="thisYear" fill="var(--color-thisYear)" radius={4} />
          <Bar dataKey="prevYear" fill="var(--color-prevYear)" radius={4} />
        </BarChart>
      </ChartContainer>
    </>
  );
};

export default BarChart1;
