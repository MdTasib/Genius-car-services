import React, { useState, useEffect } from "react";
import Service from "../Service/Service";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("services.json")
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	return (
		<div className='container'>
			<h2 className='text-center text-primary'>Our Services</h2>
			<div className='row g-5'>
				{services.map(service => (
					<Service key={service.id} service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
