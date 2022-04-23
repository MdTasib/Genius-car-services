import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
	const { _id, name, price, img, description } = service;
	const navigate = useNavigate();

	const handleDetails = id => {
		navigate(`/service/${id}`);
	};

	return (
		<div className='col-md-4'>
			<img src={img} alt='' />
			<h3>{name}</h3>
			<p>Price : {price}</p>
			<p>{description}</p>
			<button onClick={() => handleDetails(_id)} className='btn btn-primary'>
				BOOK
			</button>
		</div>
	);
};

export default Service;
