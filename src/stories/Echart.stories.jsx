import React from 'react';

import Echart from './Echart';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Echart',
  component: Echart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = (args) => <Echart {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    // primary: false,
    // label:'Echart',
    style:{width:'500px', height: "500px" ,border: '1px solid'},
    options:{
        tooltip: {
          trigger: "axis",
          // formatter:function(params){
          //   console.log("---",params[0]);
          //   return(`${params[0].axisId}:${params[0].axisValue} ${params[0].seriesName}:${params[0].value}`)
          // }
        },
        axisPointer: {
          link: { xAxisIndex: 'all' },
          label: {
            backgroundColor: '#777'
          }
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
            gridIndex: 2
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
          {
            gridIndex: 2
          }
      
        ],
        grid: [
          {
            bottom: '70%'
          },
          {
            top: '40%',
            bottom:'40%'
          },
          {
            top: '70%',
          }
        ],
        series: [
          {
            name: "温度",
            data: [123,176,154,132,119,157,167],
            type: "bar",
          },
          {
            name: "宽度",
            type: "line",
            showSymbol: false,
            data: [123,176,154,132,119,157,167],
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
          {
            name: "长度",
            type: 'scatter',
            showSymbol: false,
            data: [123,176,154,132,119,157,167],
            xAxisIndex: 2,
            yAxisIndex: 2,
          }
        ],
    }
};