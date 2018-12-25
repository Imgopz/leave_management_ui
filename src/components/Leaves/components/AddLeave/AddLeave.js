import React, { Component } from 'react';

class AddLeave extends Component {

  render()
	{
		return (
	  	  	<div>
	  	      <div>
	  	        <div className='form pa2 br2 shadow-5'>
	  	          <input className='f6 pa2 ma2 dib' placeholder='Name' type='text'/>
	  	          <select id="types" className="f6 pa2 ma2 dib bg-white ba-1 b--gray">
					  <option value="">Leave Type</option>
					  <option label="Earned Leave" value="2"></option>
					  <option label="Comp Off" value="12"></option>
					  <option label="Work From Home" value="22"></option>
					  <option label="On Duty" value="32"></option>
					  <option label="Medical Leave" value="42"></option>
					  <option label="Client Visit" value="42"></option>
				  </select>
	  	          <input className='f6 pa2 ma2 dib' placeholder='From' type='date'/>
	  	          <input className='f6 pa2 ma2 dib' placeholder='To' type='date'/>
	  	          <button className='grow f6 link ph3 pv2 dib pointer bg-gray'>Add Detail</button>
	  	        </div>
	  	      </div>
	  	  	</div>
	  	);
    }
}

export default AddLeave;
