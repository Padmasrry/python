// src/components/Dashboard.jsx
import React from 'react';
import StatsCard from './StatsCard';
import Chart from './Chart';
import DataTable from './DataTable';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Home Page Dashboard</h1>
      <div className="stats-container">
        <StatsCard title="Total Users" value="1,234" />
        <StatsCard title="Total Revenue" value="$12,345" />
        <StatsCard title="Active Projects" value="45" />
      </div>
      <div className="chart-container">
        <Chart />
      </div>
      <div className="table-container">
        <DataTable />
      </div>
    </div>
  );
};

export default Dashboard;