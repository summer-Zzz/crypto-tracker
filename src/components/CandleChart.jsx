import React, {Component} from 'react';
import * as d3 from "d3";

class CandleChart extends Component {
  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  const g = svg.append("g")
      .attr("stroke-linecap", "round")
      .attr("stroke", "black")
      .selectAll("g")
      .data(data)
      .join("g")
        .attr("transform", d => `translate(${x(d.date)},0)`);

  g.append("line")
      .attr("y1", d => y(d.low))
      .attr("y2", d => y(d.high));

  g.append("line")
      .attr("y1", d => y(d.open))
      .attr("y2", d => y(d.close))
      .attr("stroke-width", x.bandwidth())
      .attr("stroke", d => d.open > d.close ? d3.schemeSet1[0]
          : d.close > d.open ? d3.schemeSet1[2]
          : d3.schemeSet1[8]);

  g.append("title")
      .text(d => `${formatDate(d.date)}
      Open: ${formatValue(d.open)}
      Close: ${formatValue(d.close)} (${formatChange(d.open, d.close)})
      Low: ${formatValue(d.low)}
      High: ${formatValue(d.high)}`);

  return svg.node();
  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
}
    
export default CandleChart;