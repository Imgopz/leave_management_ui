import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData:props.chartData
		}
	}

	static defaultProps={
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right'
	}
	
	render() {
		return (
		<div className="container w-40 ma4">
			<div className="row">
				<div col-xs-6 >
					<canvas id="barChart" width="50" height="50"></canvas>
					<Bar 
						data={this.state.chartData}
						width={800}	
						height={500}
						options={{
							title:{
								display: this.props.displayTitle,
								text: 'Leave taken by each Emp',
								fontSize: 25
						},
						legend:{
							display: this.props.displayLegend,
							position: this.props.legendPosition
						},
						scales: {
						xAxes: [{
						barPercentage: 0.3
							}]
						}}}
					/>
				</div>
				<div col-xs-6>
					<canvas id="lineChart" width="100" height="100"></canvas>
					<Line
						data={this.state.chartData}
						width={800}
						height={500}
						options={{

							title:{
								display: this.props.displayTitle,
								text: 'Leave taken by each Emp',
								fontSize: 25
						},
						legend:{
							display: this.props.displayLegend,
							position: this.props.legendPosition
						}}}
					/>
				</div>
				<div col-xs-6>
					<canvas id="pieChart" width="100" height="100"></canvas>
					<Pie
						data={this.state.chartData}
						width={800}
						height={500}
						options={{
							title:{
								display: this.props.displayTitle,
								text: 'Leave taken by each Emp',
								fontSize: 25
						},
						legend:{
							display: this.props.displayLegend,
							position: this.props.legendPosition
						}}}
					/>
				</div>
			</div>
      </div>
    );
  }
}

export default Chart;
