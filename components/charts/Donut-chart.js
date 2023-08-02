import React,{ useState } from "react";
import dynamic from 'next/dynamic';
import { donutChartData } from "../../shared/data";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function DonutChart() {

    const labels = donutChartData.map((data) => data.label);
    const values = donutChartData.map((data) => data.value);

    const [series, setSeries] = useState(values);
    const [showActions, setShowActions] = useState(false);
    const options = {
      chart: {
        width: 100,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "top",
        offsetY: 0,
        height: 14,
      },
      labels: labels,
    };
  
    const appendData = () => {
      setSeries([...series, Math.floor(Math.random() * (100 - 1 + 1)) + 1]);
    };
  
    const removeData = () => {
      if (series.length === 1) return;
      setSeries(series.slice(0, -1));
    };
  
    const randomize = () => {
      setSeries(series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1));
    };
  
    const reset = () => {
      setSeries([44, 55, 13, 33]);
    };
  
    return (
      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              width={220}
            />
          </div>
        </div>
        {showActions && (
        <div className="actions">
          <button onClick={appendData}>+ ADD</button>
          &nbsp;
          <button onClick={removeData}>- REMOVE</button>
          &nbsp;
          <button onClick={randomize}>RANDOMIZE</button>
          &nbsp;
          <button onClick={reset}>RESET</button>
        </div>
        )}
      </div>
    );
  };
// const domContainer = document.querySelector("#app");

