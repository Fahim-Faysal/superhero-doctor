import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './DisplayDoctors.css';

const DisplayDoctors = (props) => {
	const { img, name, age, Workplace, chamber, Fees } = props.doctor;
	const element = <FontAwesomeIcon className="appoinment" icon={faCalendarCheck} />;
	return (
		<div className="display">
			<div className="doctors-container">
				<img src={img} alt="" />
				<h4>Name :{name}</h4>
				<h4>Workplace : {Workplace}</h4>
				<h4>Age: {age}</h4>
				<h4>Chamber : {chamber} </h4>
				<h4>Fees :{Fees}</h4>
				<button onClick={() => props.handelCount(props.doctor)}>{element} Appoinment</button>
			</div>
		</div>
	);
};

export default DisplayDoctors;
