import React from "react";
import { Helmet } from "react-helmet-async";
// import PageTitle from "../../shared/PageTitle/PageTitle";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About</title>
			</Helmet>
			{/* <PageTitle title='About' /> */}
			<div>this is about</div>;
		</>
	);
};

export default About;
