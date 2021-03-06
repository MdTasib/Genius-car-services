import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
	const navigate = useNavigate();

	const googlePrivider = new GoogleAuthProvider();
	const handleGoogleLogin = () => {
		signInWithPopup(auth, googlePrivider).then(result => {
			const user = result.user;
			if (user.uid) {
				navigate("/home");
			}
		});
	};

	return (
		<>
			<div className='d-flex align-items-center mt-4'>
				<div style={{ height: "3px" }} className='bg-secondary w-50'></div>
				<b className='px-4'>Or</b>
				<div style={{ height: "3px" }} className='bg-secondary w-50'></div>
			</div>
			<div className='mt-4 text-center'>
				<button
					onClick={handleGoogleLogin}
					className='btn btn-warning w-50 text-white fw-bold'>
					Google Sing In
				</button>
				<br />
				<button className='btn btn-primary w-50 text-white fw-bold mt-4'>
					Facebook Sing In
				</button>
			</div>
		</>
	);
};

export default SocialLogin;
