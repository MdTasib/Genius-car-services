import React from "react";

const Expert = ({ expert }) => {
	const { name, img } = expert;

	return (
		<div className='col-md-4'>
			<div class='card'>
				<img src={img} class='card-img-top' alt='...' />
				<div class='card-body'>
					<h5 class='card-title'>{name}</h5>
				</div>
			</div>
		</div>
	);
};

export default Expert;
