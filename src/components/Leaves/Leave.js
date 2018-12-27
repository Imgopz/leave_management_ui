import React from 'react';

const Employee = ({ name, leavetype, lfrom, lto }) => {
  return (
        <tr>
          <td className="pv3 pr3 bb tl b--black-20">{name}</td>
          <td className="pv3 pr3 bb tl b--black-20">{leavetype}</td>
          <td className="pv3 pr3 bb tl b--black-20">{lfrom}</td>
          <td className="pv3 pr3 bb tl b--black-20">{lto}</td>
        </tr>
  );
}

export default Employee;
