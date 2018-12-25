import React, { Component } from 'react';

class AddEmployee extends Component {

  render()
	{
		return (
	  	  	<div>
	  	      <div>
	  	        <div className='form pa2 br3 shadow-5'>
	  	          <input className='f6 pa2 ma2' placeholder='Id' type='number'/>
	  	          <input className='f6 pa2 ma2 dib' placeholder='Name' type='text'/>
	  	          <input className='f6 pa2 ma2 dib' placeholder='Email' type='email'/>
	  	          <input className='f6 pa2 ma2 dib' placeholder='User Name' type='text'/>
	  	          <button className='grow f6 link ph3 pv2 dib pointer bg-gray'>Add Employee</button>
	  	        </div>
	  	      </div>
	  	  	</div>
	  	  );
    }
}

export default AddEmployee;
