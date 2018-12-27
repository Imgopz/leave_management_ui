import React, { Component } from 'react';

class AddLeave extends Component {
	constructor(){
		super();
		this.state = {
			addedName: '',
			addedLeave: '',
			addedLfrom: '',
			addedLto: ''
		}
	}
	
	onNameChange = (event) => {
		this.setState({addedName: event.target.value})
	}
	onLeaveChange = (event) => {
		this.setState({addedLeave: event.target.value})
	}
	onLfromChange = (event) => {
		this.setState({addedLfrom: event.target.value})
	}
	
	onLtoChange = (event) => {
		this.setState({addedLto: event.target.value})
	}
	
	onAddLeave = () => {
		fetch('http://localhost:3000/addleave', {
			method: 'post',
			headers: {'content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.addedName,
				leavetype: this.state.addedLeave,
				lfrom: this.state.addedLfrom,
				lto: this.state.addedLto
			})
		})
		console.log(this.state);

	}
	
	render()
		{
			return (
				<div>
				  <div>
					<div className='form pa2 br2 shadow-5'>
					  <input onChange={this.onNameChange} className='f6 pa2 ma2 dib' placeholder='Name' type='text'/>
					  <select onChange={this.onLeaveChange} id="types" className="f6 pa2 ma2 dib bg-white ba-1 b--gray">
						  <option value="">Leave Type</option>
						  <option label="Earned Leave" value="Earned Leave"></option>
						  <option label="Comp Off" value="Comp Off"></option>
						  <option label="Work From Home" value="Work From Home"></option>
						  <option label="On Duty" value="On Duty"></option>
						  <option label="Medical Leave" value="Medical Leave"></option>
						  <option label="Client Visit" value="Client Visit"></option>
					  </select>
					  <input onChange={this.onLfromChange} className='f6 pa2 ma2 dib' placeholder='From' type='date'/>
					  <input onChange={this.onLtoChange} className='f6 pa2 ma2 dib' placeholder='To' type='date'/>
					  <button onClick={this.onAddLeave} className='grow f6 link ph3 pv2 dib pointer bg-gray'>Add Detail</button>
					</div>
				  </div>
				</div>
			);
		}
}

export default AddLeave;
