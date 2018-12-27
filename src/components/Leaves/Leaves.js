import React, { Component } from 'react';
import LeaveList from './LeaveList';
import AddLeave from './components/AddLeave/AddLeave'


class Leaves extends Component {
  
  constructor() {
    super()
    this.state = {
      leaves: [],
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/leaves')
      .then(response=> response.json())
      .then(users => {this.setState({leaves: users})});
  }
  
  render() {
    const { leaves } = this.state;
	return (
      <div>
        <p className="tl mh7 fw5">Add Leave Details</p>
        <AddLeave />
        <div className="pa4">
			  <div className="overflow-auto">
			    <table className="f6 w-100 mw8 center">
			      <thead>
			        <tr>
			          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
			          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Leave</th>
			          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">From</th>
			          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">To</th>
			        </tr>
			      </thead>
			      <LeaveList users={leaves} />
			    </table>
			  </div>
		</div>
      </div>
    );
  }
}

export default Leaves;
