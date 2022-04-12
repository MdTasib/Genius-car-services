import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const data = [
	{ name: "John Smith", img: expert1 },
	{ name: "David Warnar", img: expert2 },
	{ name: "Mychel Hassy", img: expert3 },
	{ name: "Aron Fance", img: expert4 },
	{ name: "Naymer JR", img: expert5 },
	{ name: "Smith Crous", img: expert6 },
];

const Experts = () => {
	return (
		<div className='container py-5'>
			<h2 className='text-center text-primary'>Our Experts</h2>
			<div className='row g-5'>
				{data.map(expert => (
					<Expert key={expert.name} expert={expert} />
				))}
			</div>
		</div>
	);
};

export default Experts;
