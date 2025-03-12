"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Income", value: 40, color: "#22C55E" },
  { name: "Order", value: 30, color: "#FFC632" },
  { name: "Customer", value: 20, color: "#4268FB" },
  { name: "Cancel", value: 10, color: "#FF5200" },
];

const OrderStatus = () => {
  return (
    <div className="w-full h-[400px] p-6 bg-gray-50 rounded-lg shadow-md">
      <h3 className="font-semibold text-xl text-black">Order Status</h3>
      <p className="text-xs font-normal text-whiteDarker  mb-4">
        Total Earnings of the Month
      </p>
      <div className="relative">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              labelLine={false}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-xl font-bold">Ratio</p>
          <p className="text-2xl font-semibold text-gray-800">100%</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="block w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="text-sm text-gray-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
