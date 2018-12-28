import React, { Component } from 'react';
import Chart from './Chart'


class Home extends Component {
  constructor(){
	  super();
	  this.state = {
		  chartData:{}
	  }
  }
  
  componentWillMount(){
	  this.getChartData();
  }
  
  getChartData(){
	  this.setState({
		  chartData:{
				labels:['Gopal', 'Krishnan', 'Prateek', 'Harshal', 'Kiran'],
				datasets:[
				   {
					   label:'Leave Taken this year',
					   data:[
					   15,
					   10,
					   20,
					   30,
					   9
						],
						backgroundColor:[
						'rgba(255, 99, 152, 0.6)',
						'rgba(54, 162, 235, 0.6)',
						'rgba(255, 206, 86, 0.6)',
						'rgba(75, 192, 192, 0.6)',
						'rgba(206, 255, 86, 0.6)'
						]	
				}
				]
			}
	  });
  }
  
  render() {
    return (
      <div className="Home">
		<Chart chartData={this.state.chartData} legendPosition="bottom"/>
		<p className='mv6'>This page is under construction. Please come back soon!</p>
      </div>
    );
  }
}

export default Home;
