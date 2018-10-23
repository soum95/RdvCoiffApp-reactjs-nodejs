import React from 'react';
import {Link} from "react-router-dom";
import ServiceList from '../containers/ServiceList';
 class Services extends React.Component {
 render(){
	return (
		<div className="Services">
		<section>
		<header>
			<div className="container">
				<h2>Our Services</h2>
				<p className="subtitle">We offer a wide range of beauty services</p>
				<p className="more"><Link to="/services" className="c-button m-type-2">See all Services</Link></p>
			</div>
		</header>
	
		<div className="c-service-list m-paginated" data-items="4" data-items-desktop="4" data-items-desktop-small="3" data-items-tablet="2" data-items-mobile="1">
			<div className="container">
				<div className="service-list-inner">
					<div className="service-list-item">

						<div className="c-service">
							<div className="service-image">
								<Link to="/services"><img src="images/s1.jpg" alt=""/></Link>
							</div>
							<h3 className="service-title"><Link to="/services">Woman's Haircut</Link></h3>
							<div className="service-description">
								<p>Shampoo, Haircare,Wash, Cut & Finish , Blow dry</p>
							</div>
						</div>
						

					</div>
					<div className="service-list-item">

						
						<div className="c-service">
							<div className="service-image">
								<Link to="/services"><img src="images/s2.jpg" alt=""/></Link>
							</div>
							<h3 class="service-title"><Link to="services">hair coloring</Link></h3>
							<div class="service-description">
								<p >Hair Colouring & Highlights, Evening Hairdressing</p>
							</div>
						</div>
						

					</div>
					<div class="service-list-item">

					
						<div class="c-service">
							<div class="service-image">
								<Link to="/services"><img src="images/s3.jpg" alt=""/></Link>
							</div>
							<h3 class="service-title"><Link to="services">
							Sweep & Highlights</Link></h3>
							<div class="service-description">
								<p>specialist for Sweep & Highlights</p>
							</div>
						</div>
						

					</div>
					<div class="service-list-item">

						
						<div class="c-service">
							<div class="service-image">
								<Link to="/services"><img src="images/s4.jpg" alt=""/></Link>
							</div>
							<h3 class="service-title"><Link to="/services">Hair Care</Link></h3>
							<div class="service-description">
								<p>scalp care and massage with essential oils, organic & veg</p>
							</div>
						</div>
						

					</div>
				
				</div>
			</div>
		</div>
		
</section>
	
						</div>
	);
}
}
export default Services;
