import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Echart from './Echart';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const option = {
  tooltip: {
    trigger: 'axis',
    formatter:function(params){      
      return(params[0].axisId)
    }
  },
  xAxis: {
    name: '时间',
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    inverse: true
  },
  series: [
    {
      name: '温度',
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};
root.render(
  <React.StrictMode>
    <Echart options={option} style={{height:'300px'}}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
