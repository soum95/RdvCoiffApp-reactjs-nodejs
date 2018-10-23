import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/index';
import { withRouter } from 'react-router-dom';
import Login from '../components/Login'
import Popup from "reactjs-popup";
import Appointement from '../components/Appointement';
class Header extends React.Component {
	
	onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
 render(){
	const isAuthenticated= this.props.auth;
	const user = this.props.auth;

// 	 <Popup trigger={<button className="c-button m-open-ajax-modal">Make a Reservation </button>}  closeOnDocumentClick modal>
// 	{close => (
		
// 	  <div>
// 	  <a className="close" onClick={close}>
// 	  &times;
// 	</a>
// 	  <Appointement/>
		
// 		<div className="content">
// 		  {" "}
	 
// 		</div>
		
// 	  </div>
// 	)}
//   </Popup>

	const guestLinks=(<Link to="/Login" className="c-button m-op-ajax-modal">Make a Reservation</Link>);
	return (
		<header id="header" className="m-animated">
		<div className="header-bg">
			<div className="header-inner">

				<div className="header-branding">
					<a href="index.html"><img src="images/logo.png" alt="BeautySpot" data-hires="images/logo.2x.png" width="291"/></a>
				</div>
				
				<div className="header-navigation">
					<nav className="header-menu">
						<button className="header-menu-toggle" type="button"><i className="fa fa-bars"></i>MENU</button>
						<ul>
							<li className="m-active">
								<span><Link to="/">Front Page</Link></span>
							</li>
							<li>
								<span><Link to="/services">Pages</Link></span>
								<ul className="sub-menu">
									<li><Link to="/services">Services</Link></li>
									<li><Link to="/aboutUs">About Us</Link></li>
									<li><Link to="/login">Gallery</Link></li>
									
								</ul>
							</li>
							
							
							<li>
								<span><a href="contact.html">Contact</a></span>
							</li>
						</ul>
					</nav>
					
					<div className="header-cart">
						<div className="header-cart-inner">
							<a href="shop-cart.html"><i className="cart-ico fa fa-shopping-cart"></i><span className="cart-label">Cart</span><span className="cart-count">(3 items)</span></a>
						</div>
					</div>
		
					<div className="header-search">
						<div className="header-search-inner">
							<form className="search-form" action="search-results.html">
								<i className="search-ico fa fa-search"></i>
								<input className="search-input" type="text" placeholder="Search for..."/>
								<button className="search-submit" type="submit"><i className="fa fa-angle-right"></i></button>
								<button className="search-toggle" type="button">Search</button>
							</form>
						</div>
						<button className="search-toggle-mobile" type="button"><i className="fa"></i></button>
					</div>
		

				</div>
			
				<div className="header-panel">

					
					<button class="header-panel-toggle" type="button"><i class="fa"></i></button>
					
					<div className="header-reservation">
				{ guestLinks  }
					</div>
					
					<div className="header-contact">
						<ul>

					
							<li>
								<div className="item-inner">
									<i className="ico fa fa-phone"></i>
									<strong>321 654 987</strong>
								</div>
							</li>
							
							<li>
								<div className="item-inner">
									<i className="ico fa fa-envelope-o"></i>
									<a href="#">hello@beautyspot.com</a>
								</div>
							</li>
							
							<li>
								<div className="item-inner">
									<i className="ico fa fa-map-marker"></i>
									<strong>BEAUTYSPOT</strong><br/>
									9015 Sunset Boulevard<br/>
									Ca 90069
								</div>
							</li>
							
							<li>
								<div className="item-inner">
									<i className="ico fa fa-clock-o"></i>
									<dl>
										<dt>Mo. - Fr.:</dt>
										<dd>10:00 - 16:00</dd>
										<dt>Sa.:</dt>
										<dd>10:00 - 14:00</dd>
										<dt>Su.:</dt>
										<dd>Closed</dd>
									</dl>
								</div>
							</li>
						

						</ul>
					</div>
				
					<div className="header-social">
						<ul>
							<li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#" title="Pinterest"><i className="fa fa-pinterest"></i></a></li>
						</ul>
					</div>
				

				</div>
				

			</div>
		</div>
	</header>
	
  );
};
};
Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logoutUser })(withRouter(Header));