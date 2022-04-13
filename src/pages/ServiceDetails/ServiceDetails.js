import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
	// const params = useParams();
	const { serviceId } = useParams();

	return (
		<div className='py-5 mt-5'>
			<h3>This is service details : {serviceId}</h3>
			<Link to='/checkout'>
				<button className='btn btn-primary'>Procced Check Out</button>
			</Link>
		</div>
	);
};

export default ServiceDetails;
