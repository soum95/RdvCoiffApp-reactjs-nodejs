import React from 'react';
import {Link} from "react-router-dom";
export default class Footer extends React.Component {
 render(){
	return (
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
			
  );
};
};