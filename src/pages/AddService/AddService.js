import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => {
		console.log(data);
		fetch("http://localhost:5000/service", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(result => {
				console.log(result);
			});
	};

	return (
		<div className='py-5'>
			<h3>Please add a new service</h3>
			<form onSubmit={handleSubmit(onSubmit)} className=' w-50 mx-auto'>
				<input
					className='mb-3 w-100'
					placeholder='Name'
					{...register("name")}
				/>
				<br />
				<input
					className='mb-3 w-100'
					placeholder='Description'
					{...register("description")}
				/>
				<br />
				<input
					className='mb-3 w-100'
					placeholder='Price'
					type='number'
					{...register("price")}
				/>
				<br />
				<input
					className='mb-3 w-100'
					placeholder='Photo Url'
					{...register("img")}
				/>
				<br />
				<input type='submit' />
			</form>
		</div>
	);
};

export default AddService;
