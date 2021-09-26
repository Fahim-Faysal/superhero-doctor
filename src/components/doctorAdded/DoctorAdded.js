import React from 'react';

const DoctorAdded = (props) => {
	console.log(props.count);
	const { count } = props;
	let total = 0;
	for (const doctors of count) {
		total = total + doctors.salary;
	}
	return (
		<div>
			<h1>Doctor Selected : {props.count.length}</h1>
			<h3>Total Salary : {total}</h3>
		</div>
	);
};

export default DoctorAdded;
