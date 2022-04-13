import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthUser } from "../../../App";
import auth from "../../../firebase.init";

const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const navigate = useNavigate();
	const [user, setUser] = useContext(AuthUser);
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	const handleSubmit = event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		signInWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				setUser(user);
			})
			.catch(error => console.log(error.message));
	};

	if (user.uid) {
		navigate(from, { replace: true });
	}

	return (
		<div className='py-5 mt-5 w-50 m-auto'>
			<h3 className='text-primary'>Please Login</h3>
			<form onSubmit={handleSubmit}>
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
					New Genius Car ? <Link to='/singup'>Please Register</Link>
				</p>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
