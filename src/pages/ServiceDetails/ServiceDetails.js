import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
	// const params = useParams();
	const { serviceId } = useParams();

	return (
		<div className='py-5 mt-5'>
			<h3>This is service details : {serviceId}</h3>
		</div>
	);
};

export default ServiceDetails;
