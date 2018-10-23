import React from 'react';
class NewsletterSection extends React.Component {
 render(){
	return(
		<div className="newsletter">
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
									<form id="subscribe-form"  method="get">	
										<p style={{display: 'none'}} className="c-alert-message m-warning m-validation-error"><i className="ico fa fa-exclamation-circle"></i>Email address is required.</p>
										<p style={{display: 'none'}} className="c-alert-message m-warning m-request-error"><i className="ico fa fa-exclamation-circle"></i>There was a connection problem. Try again later.</p>
										<p style={{display: 'none'}} className="c-alert-message m-success"><i className="ico fa fa-check-circle"></i><strong>Sent successfully.</strong></p>
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
			</div>
	);
}
}

export default NewsletterSection;