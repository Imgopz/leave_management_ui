import React from 'react';
import Employee from './Employee';

const EmployeeList = ({ users }) => {
  return (
    <tbody className="lh-copy">
      {
        users.map((user, i) => {
          return (
            <Employee 
              key={i}
              id={users[i].id}
              name={users[i].name}
              email={users[i].email}
              username={users[i].username} />
          );
        })
      }
     </tbody>
  );
}

export default EmployeeList;