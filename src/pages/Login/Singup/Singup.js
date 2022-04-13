import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Singup = () => {
	const emailRef = useRef("");
	const nameRef = useRef("");
	const passwordRef = useRef("");

	const handleSubmit = event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		console.log(email, password);
	};

	return (
		<div className='py-5 mt-5 w-50 m-auto'>
			<h3 className='text-primary'>Please Register</h3>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='nameInput' className='form-label'>
						Your Name
					</label>
					<input
						type='text'
						className='form-control'
						id='nameInput'
						aria-describedby='name'
						required
						ref={nameRef}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Your Email
					</label>
					<input
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						required
						ref={emailRef}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputPassword1' className='form-label'>
						Password
					</label>
					<input
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						required
						ref={passwordRef}
					/>
				</div>
				<p>
					Already Register ? <Link to='/login'>Please Login</Link>
				</p>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Singup;
