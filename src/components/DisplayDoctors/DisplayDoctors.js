import React from 'react';
import './DisplayDoctors.css';

const DisplayDoctors = (props) => {
	const { img, name, age, Workplace, salary } = props.doctor;
	return (
		<div className="display">
			<div className="doctors-container">
				<img src={img} alt="" />
				<h4>Name :{name}</h4>
				<h4>Workplace : {Workplace}</h4>
				<h4>Age: {age}</h4>
				<h4>Salary :{salary}</h4>
				<button onClick={() => props.handelCount(props.doctor)}>Appoinment</button>
			</div>
		</div>
	);
};

export default DisplayDoctors;
