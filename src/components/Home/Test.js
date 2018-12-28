import React, { Component } from 'react';
import Select from 'react-select'

const options = [
  { value: 'Gopal', label: 'Gopal' },
  { value: 'Krishnan', label: 'Krishnan' },
  { value: 'Kiran', label: 'Kiran' }
];

class Test extends Component {
	
	state = {
	selectedOption: null,
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


