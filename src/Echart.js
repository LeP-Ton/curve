import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

const Echart = (props) => {
  const { options, style } = props;
  const chartRef = useRef();
  const [myChart, setMyChart] = useState(null);

  const resizeEcharts = () => {
    myChart.resize();
  };

  useEffect(() => {
    setMyChart(echarts.init(chartRef.current));
  }, []);

  useEffect(() => {
    if (myChart) {
      console.log('==',myChart);

      // myChart.on('updateAxisPointer', function (event) {
      //   const xAxisInfo = event.axesInfo[0];
      //   console.log("hello",xAxisInfo);
      //   if (xAxisInfo) {
      //     const dimension = xAxisInfo.value + 1;
      //     myChart.setOption({
      //       series: {
              
      //       }
      //     });
      //   }
      // });

      window.addEventListener("resize", resizeEcharts);
      return () => {
        window.removeEventListener("resize", resizeEcharts);
        myChart.dispose();
        setMyChart(null);
      };
    }
  }, [myChart]);

  useEffect(() => {
    myChart && myChart.setOption(options);
  }, [myChart, options]);

  return <div ref={chartRef} className="default-charts" style={style} />;
};

export default Echart;
