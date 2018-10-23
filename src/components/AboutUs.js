import React from 'react';
import {Link} from "react-router-dom";
import EmployeeList from '../containers/EmployeeList';
 class AboutUs extends React.Component {
 render(){
	return (

		<div id="wrapper">

		
			<div id="core" className="core-bg-1">

			
				<div id="page-header">
					<div className="container">
						<h1>About Us</h1>
						<ul className="breadcrumbs">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/aboutUs">Salon</Link></li>
							<li>About Us</li>
						</ul>
					</div>
				</div>
				

				<div className="container">

				
					<div id="page-content">
						<div className="various-content">

						
							<section>

								<div className="row">
									<div className="col-sm-6">

										<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>
										<p><strong>The copy warned the Little Blind Text</strong>, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind.</p>

									</div>
									<div className="col-sm-6">

										<p><img src="images/about_us.jpg" alt=""/></p>

									</div>
								</div>

							</section>
					
							<EmployeeList/>
							
							<section>

								
								<div className="c-cta-message">
									<div className="row">
										<div className="col-sm-8">
											<h2>Visit the best beauty salon around!</h2>
											<p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
										</div>
										<div className="col-sm-4">
											<p className="textalign-right">
												<a href="contact.html" className="c-button">Contact Info</a>
											</p>
										</div>
									</div>
								</div>
							

							</section>
							

						</div>
					</div>
				

				</div>

			</div>
			
			<div id="bottom-panel">
				<div className="bottom-panel-inner">
					<div className="container">
						<div className="row">
							<div className="col-md-6">

								<div className="bottom-text various-content">

									<h3>About Beautyspot</h3>
									<p><strong>BEAUTYSPOT</strong> is an ideal template for <strong>beauty salon, hairdressers, wellness or spa</strong>. Clean code and top-notch web design techniques are wrapped with <strong>several gorgeous color schemes</strong> to choose from.</p><p>You can buy this responsive HTML5/CSS3 template on <a href="https://themeforest.net/user/lsvrthemes/portfolio?ref=LSVRthemes">ThemeForest</a>.</p>

								</div>
							

							</div>
							<div className="col-md-6">

						
								<div className="bottom-subscribe various-content">

									<h3>Newsletter</h3>
									<p>BEAUTYSPOT supports MailChimp integration.</p>
									<form id="subscribe-form" action="http://lsvr.us14.list-manage.com/subscribe/post-json?u=8291218baaf54ddfd7dbc6016&amp;id=f3e5d696dc&amp;c=?" method="get">

									
										<p style={{display: "none"}} className="c-alert-message m-warning m-validation-error"><i className="ico fa fa-exclamation-circle"></i>Email address is required.</p>
										
										<p style={{display: "none"}} className="c-alert-message m-warning m-request-error"><i className="ico fa fa-exclamation-circle"></i>There was a connection problem. Try again later.</p>
										
										<p style={{ display: "none"}} className="c-alert-message m-success"><i className="ico fa fa-check-circle"></i><strong>Sent successfully.</strong></p>
										

										<div className="form-fields">
											<input className="m-required m-email" name="EMAIL" type="text" data-placeholder="Your email address" title="Your email address"/>
											<button className="c-button submit-btn" type="submit" data-label="Subscribe" data-loading-label="Sending...">Subscribe</button>
										</div>
									</form>

								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		

		
			<footer id="footer">
				<div className="container">

				
					<div className="footer-twitter m-paginated" data-id="LSVRthemes" data-limit="3" data-interval="12000">
						<div className="footer-twitter-inner">
							<i className="ico fa fa-twitter"></i>
							<h4 className="twitter-title"><a href="https://twitter.com/LSVRthemes">@LSVRthemes</a></h4>
							<div className="twitter-feed">
								<span className="c-loading-anim"><span></span></span>
							</div>
						</div>
					</div>
					
					<div className="footer-bottom">
						<div className="row">
							<div className="col-md-6 col-md-push-6">

								<nav className="footer-menu">
									<ul>
										<li><a href="index.html">Home</a></li>
										<li><a href="services.html">Services</a></li>
										<li><a href="documentation.html">Documentation</a></li>
									</ul>
								</nav>
							

							</div>
							<div className="col-md-6 col-md-pull-6">

							
								<div className="footer-text">
									<p>Buy this template on <a href="http://themeforest.net/user/LSVRthemes/portfolio?ref=LSVRthemes">ThemeForest.net</a></p>
								</div>
								

							</div>
						</div>
					</div>
				</div>
			</footer>
		

        </div>
        
	);
}
}
export default AboutUs;
	

