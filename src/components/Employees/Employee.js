import React from 'react';

const Employee = ({ name, email, id, username }) => {
  return (
        <tr>
          <td className="pv3 pr3 bb tl b--black-20">{id}</td>
          <td className="pv3 pr3 bb tl b--black-20">{name}</td>
          <td className="pv3 pr3 bb tl b--black-20">{username}</td>
          <td className="pv3 pr3 bb tl b--black-20">{email}</td>
        </tr>
  );
}

export default Employee;
