import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

import DropMenu from "../DropDownMenu/DropMenu"
import "./DisplayChart.scss";

export default function DisplayChart(props) {
  // [ [ 1618045200000, 60543.44, 60812.65, 60474.31, 60789.16, 22.318214 ],
  // [ 1618048800000, 60783.96, 60994.81, 60528.68, 60660.47, 20.398156 ],
  // [ 1618052400000, 60668.53, 60733.78, 60508.98, 60564.44, 20.704174 ],
  // [ 1618056000000, 60577.98, 60794.92, 59909.65, 60101.23, 26.379047 ],
  // [ 1618059600000, 60098.03, 60483.55, 60010.57, 60481.23, 26.272624 ],
  // [ 1618063200000, 60476.39, 60509.17, 60266.82, 60407.85, 19.100422 ],
  // [ 1618066800000, 60408.59, 60475.32, 60118.78, 60276.85, 23.76693 ],
  // [ 1618070400000, 60267.23, 60560.1, 60149.45, 60293.27, 24.00982 ],
  // [ 1618074000000, 60273.44, 60275.38, 59967.27, 60110.2, 29.045549 ],
  // [ 1618077600000, 60110.2, 60110.4, 59586.48, 60032.36, 18.22715 ],
  // [ 1618081200000, 60032.85, 60033.11, 59559.86, 59597.96, 15.275327 ],
  // [ 1618084800000, 59642.17, 59796.63, 58390.65, 58603.42, 21.570105 ],
  // [ 1618088400000, 58599.07, 59231.42, 58509.39, 59149.73, 29.064091 ],
  // [ 1618092000000, 59179.04, 59400.23, 59030.64, 59033.57, 27.416553 ],
  // [ 1618095600000, 59059.62, 59833.34, 59059.51, 59788.27, 24.948781 ],
  // [ 1618099200000, 59782.8, 60410.24, 59617.4, 60158.62, 28.794564 ],
  // [ 1618102800000, 60144.12, 60610.5, 60046.22, 60610.5, 20.404694 ],
  // [ 1618106400000, 60586.98, 60586.98, 60297.59, 60520.26, 19.873473 ],
  // [ 1618110000000, 60519.85, 60705.76, 60224.04, 60281.52, 20.949645 ],
  // [ 1618113600000, 60304.61, 60338.37, 59820.05, 59934.39, 23.64589 ],
  // [ 1618117200000, 59914.74, 60019.22, 59560.42, 59660.22, 26.139196 ],
  // [ 1618120800000, 59694.35, 59911.81, 59368.43, 59745.73, 25.411357 ],
  // [ 1618124400000, 59762.32, 59797.24, 59409.82, 59665.97, 17.975011 ],
  // [ 1618128000000, 59668.66, 60155.14, 59668.66, 59970.6, 17.208874 ],
  // [ 1618131600000, 60010.18, 60051.2, 59465, 59670.15, 21.415858 ],
  // [ 1618135200000, 59670.15, 59961.19, 59511.45, 59586.59, 22.677707 ],
  // [ 1618138800000, 59609.85, 59851.98, 59459.9, 59731.73, 21.560334 ],
  // [ 1618142400000, 59760.88, 59844.86, 59464.42, 59741.09, 24.51146 ],
  // [ 1618146000000, 59741.32, 59753.81, 59245.94, 59335.55, 23.378314 ],
  // [ 1618149600000, 59350.87, 59662.15, 59271.33, 59569.81, 22.107265 ],
  // [ 1618153200000, 59599.17, 59782.98, 59579.56, 59655.6, 22.752325 ],
  // [ 1618156800000, 59654.79, 59795.5, 59520.2, 59579.5, 24.830872 ],
  // [ 1618160400000, 59612.03, 59953.09, 59444.59, 59874.56, 25.934935 ],
  // [ 1618164000000, 59900.68, 59950.52, 59768.1, 59878.09, 17.669873 ],
  // [ 1618167600000, 59882.29, 60200.68, 59573.3, 59662.78, 22.648862 ],
  // [ 1618171200000, 59720.31, 59830.23, 59501.89, 59718.03, 13.796324 ],
  // [ 1618174800000, 59659.88, 59685.96, 59498.29, 59641.82, 11.95759 ],
  // [ 1618178400000, 59617.26, 60126.75, 59456.61, 60120.79, 19.695513 ],
  // [ 1618182000000, 60106.58, 60106.58, 59843.77, 60018.92, 19.051441 ],
  // [ 1618185600000, 60008.6, 60324.04, 59625.23, 59829.06, 22.944618 ],
  // [ 1618189200000, 59840.65, 60158.09, 59816.31, 59835.66, 21.38073 ],
  // [ 1618192800000, 59862.11, 59913.27, 59608.88, 59693.8, 17.563901 ],
  // [ 1618196400000, 59697.57, 60461.41, 59674.85, 60368.26, 22.843636 ],
  // [ 1618200000000, 60397.92, 60617.17, 60109.72, 60117.31, 25.753281 ],
  // [ 1618203600000, 60114.2, 60269.87, 60041.14, 60209.27, 18.086743 ],
  // [ 1618207200000, 60216.76, 60810.99, 60114.91, 60810.56, 23.502618 ],
  // [ 1618210800000, 60809.85, 61272.18, 60670.47, 60724.44, 30.507806 ],
  // [ 1618214400000, 60720.35, 60838.09, 60587.09, 60692.38, 26.585209 ],
  // [ 1618218000000, 60713.36, 60869.17, 59709.67, 59980.61, 31.891166 ],
  // [ 1618221600000, 59945.54, 60273.67, 59480.56, 59788.4, 29.046687 ],
  // [ 1618225200000, 59788.64, 60258.71, 59752.59, 60256.2, 28.680438 ],
  // [ 1618228800000, 60264.69, 60574.66, 60169.01, 60429.84, 27.746054 ],
  // [ 1618232400000, 60460.12, 60590.2, 60289.8, 60318.04, 27.458613 ],
  // [ 1618236000000, 60327.64, 60336.44, 59909.18, 59909.18, 24.330471 ],
  // [ 1618239600000, 59891.33, 60137.9, 59631.04, 60044.36, 22.983864 ],
  // [ 1618243200000, 60018.8, 60120.71, 59719.41, 59982.66, 19.16747 ],
  // [ 1618246800000, 59980.93, 59982.66, 59744.41, 59759.5, 16.966733 ],
  // [ 1618250400000, 59729.95, 60023.86, 59690.64, 59999.08, 13.98312 ],
  // [ 1618254000000, 59978.88, 60209.99, 59891.4, 60089.88, 14.378036 ],
  // [ 1618257600000, 60103.74, 60245.36, 59940.59, 60068.78, 16.572011 ],
  // [ 1618261200000, 60068.86, 60080.29, 59768.89, 60007.89, 15.112531 ],
  // [ 1618264800000, 60008.93, 60080.3, 59862.4, 60060.56, 17.274699 ],
  // [ 1618268400000, 60071.93, 60110.4, 59869.9, 59869.9, 17.85254 ],
  // [ 1618272000000, 59868.27, 60483.32, 59835.04, 60453.15, 19.226794 ],
  // [ 1618275600000, 60450.78, 60790.39, 60224.55, 60649.97, 19.367046 ],
  // [ 1618279200000, 60690.36, 60960.45, 60581.76, 60841.39, 22.632928 ],
  // [ 1618282800000, 60838.81, 61105.43, 60500.04, 60516.07, 23.936337 ],
  // [ 1618286400000, 60532.33, 60648.53, 60367.87, 60568.11, 19.486381 ],
  // [ 1618290000000, 60615.88, 60824.56, 60483.78, 60694.73, 16.744628 ],
  // [ 1618293600000, 60703.96, 61410.63, 60465.78, 60729.55, 24.332615 ],
  // [ 1618297200000, 60744.82, 61195.61, 60598.45, 61061.28, 22.3127 ],
  // [ 1618300800000, 61139.06, 62877.42, 61061.21, 62714.79, 31.015121 ],
  // [ 1618304400000, 62748.86, 63268.96, 62330.97, 62954.98, 27.11548 ],
  // [ 1618308000000, 62948.3, 63102.32, 62469.81, 62764.73, 26.479272 ],
  // [ 1618311600000, 62779.06, 63079.64, 62528.56, 62951.67, 22.198718 ],
  // [ 1618315200000, 62959.48, 63253.16, 62800.64, 62986.38, 25.668783 ],
  // [ 1618318800000, 62980.98, 63030.01, 62528.36, 62809.87, 25.967469 ],
  // [ 1618322400000, 62804.43, 63009.96, 62605.54, 62930.82, 21.792879 ],
  // [ 1618326000000, 62934.8, 63661.13, 62751.45, 63327.3, 24.439924 ],
  // [ 1618329600000, 63375.48, 63719.69, 63003.57, 63153.89, 24.512601 ],
  // [ 1618333200000, 63168.07, 63375.12, 63040.71, 63375.12, 20.636045 ],
  // [ 1618336800000, 63336.06, 63558.83, 62559.68, 62663.91, 22.519699 ],
  // [ 1618340400000, 62663.79, 63056.52, 62542.6, 63026.53, 20.284451 ],
  // [ 1618344000000, 63065.19, 63219.74, 62866.7, 63179.75, 16.823482 ],
  // [ 1618347600000, 63177.92, 63328.32, 62868.66, 63145.74, 14.930818 ],
  // [ 1618351200000, 63183.43, 63295.39, 62883.07, 63263.83, 17.382957 ],
  // [ 1618354800000, 63249.04, 63675.31, 63209.69, 63571, 17.243867 ],
  // [ 1618358400000, 63586.37, 63855.43, 63218.66, 63330.33, 21.36551 ],
  // [ 1618362000000, 63330.39, 63482.3, 63093.65, 63453.42, 22.235952 ],
  // [ 1618365600000, 63475.47, 63475.47, 63098.24, 63223.91, 17.927412 ],
  // [ 1618369200000, 63190.37, 63875.68, 63073.15, 63777.2, 21.093311 ],
  // [ 1618372800000, 63744.12, 64285.13, 63626.6, 64285.13, 22.507614 ],
  // [ 1618376400000, 64282.97, 64730.11, 63916.38, 64035.08, 27.16178 ],
  // [ 1618380000000, 64057.86, 64802.34, 63926.07, 64600.24, 25.537917 ],
  // [ 1618383600000, 64588.64, 64635.39, 64293.56, 64293.56, 23.028286 ],
  // [ 1618387200000, 64312.58, 64565, 63474.22, 63914.53, 23.501462 ],
  // [ 1618390800000, 63938.86, 64148.99, 63040.13, 63578.21, 27.276512 ],
  // [ 1618394400000, 63590.93, 64160.31, 63464.45, 64096.22, 22.653 ],
  // [ 1618398000000, 64114.33, 64785.99, 64096.09, 64510.79, 22.145383 ],
  // [ 1618401600000, 64542.03, 64645.13, 63690.7, 63886.22, 25.077029 ]]
  
  const exchange = props.candles.map(([date, ...values]) => {
    return {x: new Date(date),
    y: values}})

    
    const chartData = {

    series: [{
      data: exchange
    }],
    options: {
      chart: {
        type: 'candlestick',
        height: 350
      },
      title: {
        text: props.coinName,
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    }
  }

  // props.setCandles(setChartData);
  const chart_width = 700;
  const chart_height = 500;

  return (
    <div className="Chart">
      <div className="content">
        <div>
          <ReactApexChart options={chartData.options} series={chartData.series} type="candlestick" width={chart_width} height={chart_height} />
        </div>
      </div>
      <div className="timeframe">
        <label>Chart timeframe</label>
        <DropMenu options={props.timeframes} setData={props.setTimeframe} selectedVal={props.selectedTimeframe} />
      </div>
    </div>
  );
}

