import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = ({ options }) => {
  return <ReactApexChart options={options} series={options.series} type="rangeBar"  width="450px" height={options.chart.height} />;
};

export default BarChart;