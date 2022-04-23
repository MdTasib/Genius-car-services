import React, { useState, useEffect } from "react";
import Service from "../Service/Service";
import PageTitle from "../../shared/PageTitle/PageTitle";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/service")
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	return (
		<div className='container' id='services'>
			{/* <PageTitle title='Services' /> */}
			<h2 className='text-center text-primary'>Our Services</h2>
			<div className='row g-5'>
				{services.map(service => (
					<Service key={service._id} service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
