import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../../firebase.init";
import { AuthUser } from "../../../App";
import SocialLogin from "../SocialLogin/SocialLogin";

const Singup = () => {
	const emailRef = useRef("");
	const nameRef = useRef("");
	const passwordRef = useRef("");
	const navigate = useNavigate();
	const [user, setUser] = useContext(AuthUser);

	console.log("user from context api - ", user);

	const handleSubmit = event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				updateUserProfile();
				setUser(user);
				console.log("user from firebase - ", user);
			})
			.catch(error => console.log(error.message));
	};

	const updateUserProfile = () => {
		const name = nameRef.current.value;
		updateProfile(auth.currentUser, { displayName: name })
			.then(() => {
				console.log("user name set");
			})
			.catch(error => console.log(error.message));
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
			<SocialLogin />
		</div>
	);
};

export default Singup;
