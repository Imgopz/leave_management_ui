import React, { Component } from 'react';
import AddLeave from './components/AddLeave/AddLeave'


class Leaves extends Component {
  render() {
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
			      <tbody className="lh-copy">
			        <tr>
			          <td className="pv3 pr3 bb tl b--black-20">Hassan Johnson</td>
			          <td className="pv3 pr3 bb tl b--black-20">Casual Leave</td>
			          <td className="pv3 pr3 bb tl b--black-20">Date1</td>
			          <td className="pv3 pr3 bb tl b--black-20">Date2</td>
			        </tr>
			        <tr>
			          <td className="pv3 pr3 bb tl b--black-20">Taral Hicks</td>
			          <td className="pv3 pr3 bb tl b--black-20">Comp Off</td>
			          <td className="pv3 pr3 bb tl b--black-20">Date1</td>
			          <td className="pv3 pr3 bb tl b--black-20">Date21</td>
			        </tr>
			      </tbody>
			    </table>
			  </div>
		</div>
      </div>
    );
  }
}

export default Leaves;
