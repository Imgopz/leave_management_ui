import React, { Component } from 'react';
import Select from 'react-select'

class SearchEmployee extends Component {
	
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
	  console.log(`Option selected:`, selectedOption);
	}
	
	
	render() {
		const { selectedOption } = this.state;
		return (
		  <Select className='f6 pa2 ma2 dib w-20 tl'
			value={selectedOption}
			onChange={this.handleChange}
			options={this.state.opt}
		/>
    );
  }
}

export default SearchEmployee;


