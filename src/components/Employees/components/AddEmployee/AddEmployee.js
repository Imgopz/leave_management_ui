import React, { Component } from 'react';

class AddEmployee extends Component {
	
	constructor(){
		super();
		this.state = {
			addedId: '',
			addedName: '',
			addedEmail: '',
			addedUname: ''
		}
	}
	
	onIdChange = (event) => {
		this.setState({addedId: event.target.value})
	}
	onNameChange = (event) => {
		this.setState({addedName: event.target.value})
	}
	onEmailChange = (event) => {
		this.setState({addedEmail: event.target.value})
	}
	onUnameChange = (event) => {
		this.setState({addedUname: event.target.value})
	}
	
	onAddEmployee = () => {
		fetch('http://localhost:3002/addemployee', {
			method: 'post',
			headers: {'content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.state.addedId,
				name: this.state.addedName,
				email: this.state.addedEmail,
				username: this.state.addedUname
			})
		})
		console.log(this.state);
	}

	
	render()
		{
			return (
				<div>
				  <div>
					<div className='form pa2 br3 shadow-5'>
					  <input onChange={this.onIdChange} className='f6 pa2 ma2' placeholder='Id' type='text'/>
					  <input onChange={this.onNameChange} className='f6 pa2 ma2 dib' placeholder='Name' type='text'/>
					  <input onChange={this.onEmailChange} className='f6 pa2 ma2 dib' placeholder='Email' type='email'/>
					  <input onChange={this.onUnameChange} className='f6 pa2 ma2 dib' placeholder='User Name' type='text'/>
					  <button onClick={this.onAddEmployee} className='grow f6 link ph3 pv2 dib pointer bg-gray'>Add Employee</button>
					</div>
				  </div>
				</div>
			  );
		}
}

export default AddEmployee;
