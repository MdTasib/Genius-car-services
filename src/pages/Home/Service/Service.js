import React from "react";

const Service = ({ service }) => {
	const { name, price, img, description } = service;
	return (
		<div className='col-md-4'>
			<img src={img} alt='' />
			<h3>{name}</h3>
			<p>Price : {price}</p>
			<p>{description}</p>
			<button>BOOK</button>
		</div>
	);
};

export default Service;
