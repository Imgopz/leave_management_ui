import React, { Component } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployee from './components/AddEmployee/AddEmployee'


class Employees extends Component {

  constructor() {
    super()
    this.state = {
      employees: [],
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3002/employees')
      .then(response=> response.json())
      .then(users => {this.setState({ employees: users})});
  }

  render() {
  	const { employees } = this.state;
	
    return (
    	<div>
    		<p className="tl mh7 fw5">Add Employees</p>
    		<AddEmployee /> 
	    	<div className="pa4">
	              <div className="overflow-auto">
	                <table className="f6 w-100 mw8 center">
	                  <thead>
	                    <tr>
	                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ID</th>
	                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
	                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">UserName</th>
	                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Email</th>
	                    </tr>
	                  </thead>
	        			<EmployeeList users={employees}/>
	        		</table>
	            </div>
	        </div>
		</div>
    );
  }
}

export default Employees;
