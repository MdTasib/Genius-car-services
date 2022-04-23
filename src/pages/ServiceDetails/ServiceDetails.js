import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
	// const params = useParams();
	const { serviceId } = useParams();
	const [service, setService] = useState({});

	useEffect(() => {
		fetch(`http://localhost:5000/service/${serviceId}`)
			.then(res => res.json())
			.then(data => setService(data));
	}, []);

	return (
		<div className='py-5 mt-5'>
			<h3>This is service details : {service.name}</h3>
			<p>{service.description}</p>
			<Link to='/checkout'>
				<button className='btn btn-primary'>Procced Check Out</button>
			</Link>
		</div>
	);
};

export default ServiceDetails;
