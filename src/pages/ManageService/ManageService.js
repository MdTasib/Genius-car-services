import React, { useState, useEffect } from "react";

const ManageService = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/service")
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	const handleDelete = id => {
		const confirmDelete = window.confirm("Are you sure?");
		if (confirmDelete) {
			fetch(`http://localhost:5000/service/${id}`, {
				method: "DELETE",
			})
				.then(res => res.json())
				.then(data => {
					const remining = services.filter(service => service._id !== id);
					setServices(remining);
				});
		}
	};

	return (
		<div className='py-5'>
			{services.map(service => (
				<div key={service._id}>
					<h3>
						{service.name}
						<button onClick={() => handleDelete(service._id)}>x</button>
					</h3>
				</div>
			))}
		</div>
	);
};

export default ManageService;
