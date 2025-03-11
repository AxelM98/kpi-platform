"use client";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
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
  { month: "July", thisYear: 300, prevYear: 210 },
  { month: "August", thisYear: 180, prevYear: 150 },
  { month: "September", thisYear: 360, prevYear: 200 },
  { month: "October", thisYear: 300, prevYear: 205 },
  { month: "November", thisYear: 350, prevYear: 190 },
  { month: "December", thisYear: 360, prevYear: 220 },
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

const AreaChart1 = () => {
  return (
    <>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
          <Area
              dataKey="thisYear"
              type="natural"
              fill="var(--color-thisYear)"
              fillOpacity={0.4}
              stroke="var(--color-thisYear)"
              stackId="a"
            />
            <Area
              dataKey="prevYear"
              type="natural"
              fill="var(--color-prevYear)"
              fillOpacity={0.4}
              stroke="var(--color-prevYear)"
              stackId="a"
            />
        </AreaChart>
      </ChartContainer>
    </>
  );
};

export default AreaChart1;
