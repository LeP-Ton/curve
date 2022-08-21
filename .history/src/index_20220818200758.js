import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Echart from "./Echart";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const option = {
  tooltip: {
    trigger: "axis",
    // formatter:function(params){
    //   console.log("---",params[0]);
    //   return(`${params[0].axisId}:${params[0].axisValue} ${params[0].seriesName}:${params[0].value}`)
    // }
  },
  xAxis: [
    {
      name: "时间",
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    {
      name: "时间",
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      gridIndex: 1
    },
    {
      name: "时间",
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      gridIndex: 1
    },
  ],
  yAxis: [
    {
      type: "value",
      inverse: true,
    },
    {
      gridIndex: 1
    },

  ],
  grid: [
    {
      bottom: '60%'
    },
    {
      top: '60%'
    }
  ],
  series: [
    {
      name: "温度",
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
    {
      type: "line",
      showSymbol: false,
      data: [120, 200, 150, 80, 70, 110, 130],
      xAxisIndex: 1,
      yAxisIndex: 1,
    },
  ],
};
root.render(
  <React.StrictMode>
    <Echart options={option} style={{ height: "300px" }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
