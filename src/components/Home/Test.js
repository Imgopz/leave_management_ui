import React, { Component } from 'react';
import Select from 'react-select'

class Test extends Component {
	
	constructor() {
		super()
		this.state = {
		  opt: [],
		  selectedOption: null
		}
	 }
  
	componentDidMount() {
		fetch('http://localhost:3002/employees')
		  .then(response=> response.json())
		  .then(users => {
			const y = [];
			for (const x in users){
				console.log(users[x].name)
				const temp = Object();
					temp["value"] = users[x].name;
					temp["label"] = users[x].name;
					y.push(temp);}
			this.setState({ opt: y})
			console.log(y)
		  });	
			console.log(this.state.opt)
	}	
	
	handleChange = (selectedOption) => {
	  this.setState({ selectedOption });
	  console.log(`Option selected:`, selectedOption.value);
	}
	
	
	render() {
		const { selectedOption } = this.state;
		return (
		  <Select className='w-20 pa2 ma3'
			value={selectedOption}
			onChange={this.handleChange}
			options={this.state.opt}
		/>
    );
  }
}

export default Test;


