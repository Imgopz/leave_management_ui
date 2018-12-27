import React from 'react';

const Navigation = ({onRouteChange}) => {
	return(
		<div className="bb">
			<nav className="pa2 pa2-ns">
				<p className="link dim black b f4 mr3 pointer">Employees' Leave Management System</p>
				<p onClick={() => onRouteChange('home')} className="link dim underline gray    f6 f5-ns dib mr3 pointer">Dashboard</p>
				<p onClick={() => onRouteChange('employees')} className="link dim underline gray    f6 f5-ns dib mr3 pointer">Employees</p>
				<p onClick={() => onRouteChange('leaves')} className="link dim underline gray    f6 f5-ns dib mr3 pointer">Leave Details</p>
			</nav>
		</div>

	);
}

export default Navigation;