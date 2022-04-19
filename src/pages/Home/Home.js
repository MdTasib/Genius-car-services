import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Experts from "./Experts/Experts";
import Services from "./Services/Services";
// import PageTitle from "../../shared/PageTitle/PageTitle";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home</title>
			</Helmet>
			{/* <PageTitle title='Home' /> */}
			<Banner />
			<Services />
			<Experts />
		</>
	);
};

export default Home;
