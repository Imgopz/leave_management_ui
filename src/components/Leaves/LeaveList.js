import React from 'react';
import Leave from './Leave';

const LeaveList = ({ users }) => {
  return (
    <tbody className="lh-copy">
      {
        users.map((user, i) => {
          return (
            <Leave 
              key={i}
              name={users[i].name}
			  leavetype={users[i].leavetype}
              lfrom={users[i].lfrom}
              lto={users[i].lto} />
          );
        })
      }
     </tbody>
  );
}

export default LeaveList;