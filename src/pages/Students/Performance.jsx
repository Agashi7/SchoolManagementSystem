import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, LinearScale, CategoryScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import {
  PerformanceContainer,
  SidebarContainer,
  Content,
  PerformanceHeader,
  PerformanceInfo,
  PerformanceGraphContainer,
  TotalMarks,
} from '../../styles/PerformanceStyles';

// Register the necessary components for Chart.js
Chart.register(LineElement, LinearScale, CategoryScale, PointElement, Title, Tooltip, Legend);

const PerformanceSection = () => {
  const performanceData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr'],
    marks: [90, 85, 87, 92],
    totalMarks: 354 // Sum of the marks for demonstration purposes
  };

  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: 'Performance Trends',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: performanceData.marks
      }
    ]
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10
        }
      }
    }
  };

  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line 
              data={lineChartData}
              options={chartOptions}
            />
          </PerformanceGraphContainer>
          <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  );
}

export default PerformanceSection;
