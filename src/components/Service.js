import React from 'react';



export default ({ service: { name, description,price,_id } }) => {
  return (
    <div >
    <li>
											<h3 className="accordion-title">{name} 		<p className="accordion-price">{price}</p></h3>
										
											<div className="accordion-content">
												<p>{description}</p>
											</div>
										</li>
    </div>
  );
};