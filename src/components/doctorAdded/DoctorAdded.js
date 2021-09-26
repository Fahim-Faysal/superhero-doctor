import React from 'react';
import './DoctorAdded.css';

const DoctorAdded = (props) => {
	let details = props.count;
	const { count } = props;
	let total = 0;
	for (const doctors of count) {
		total = total + doctors.Fees;
	}

	return (
		<div>
			<div className="fees-details">
				<h2>Doctor Selected : {props.count.length}</h2>
				<h3>Total Fees : ${total}</h3>
				{details.map((dname) => <h5> Selected Doctors : {dname.name}</h5>)}
			</div>
		</div>
	);
};

export default DoctorAdded;
