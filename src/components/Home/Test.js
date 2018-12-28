import React, { Component } from 'react';
import Select from 'react-select'

const options = [
  { value: 'Gopal', label: 'Gopal' },
  { value: 'Krishnan', label: 'Krishnan' },
  { value: 'Kiran', label: 'Kiran' }
];


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
			for (const x in users){
				console.log(users[x].name)
				const temp = Object();
					temp["value"] = users[x].name;
					temp["lable"] = users[x].name;
					options.push(temp);}
		  });	
			console.log(options)
	}	
	
	handleChange = (selectedOption) => {
	  this.setState({ selectedOption });
	  console.log(`Option selected:`, selectedOption);
	}
	
	
	render() {
		const { selectedOption } = this.state;
		return (
		  <Select className='w-20 pa2 ma3'
			value={selectedOption}
			onChange={this.handleChange}
			options={options}
		/>
    );
  }
}

export default Test;


