import React from 'react';
import {Link} from "react-router-dom";

 class SlideRight extends React.Component {
 render(){
	return (

<div id="main-slider" data-interval="8000">
<div className="slide-list">


	<div className="slide slide-1" data-label="Welcome to BEAUTYSPOT" style={{ backgroundImage : " url( 'images/slide_01.jpg')"}}>
		<div className="slide-bg">
			<div className="container">
				<div className="slide-inner">
					<div className="slide-content various-content textalign-left valign-middle">

						<h1>Welcome<br/>to BEAUTYSPOT!</h1>
						<h3>HTML Template for Beauty Salons,<br/>Hairdressers, Wellness or Spa</h3>

					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div className="slide slide-2" data-label="20% off All Massages" style={{backgroundImage: "url( 'images/slide_02.jpg' )"}}>
		<div className="slide-bg">
			<div className="container">
				<div className="slide-inner">
					<div className="slide-content various-content textalign-right valign-middle">

						<h2>20% Off<br/>All Massages</h2>
						<h3>This Friday Only!<br/><a href="ajax/reservation-form.html" className="m-open-ajax-modal">Make a Reservation</a></h3>

					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div className="slide slide-3" data-label="Eshop Launched" style={{backgroundImage: "url( 'images/slide_03.jpg' )"}}>
		<div className="slide-bg">
			<div className="container">
				<div className="slide-inner">
					<div className="slide-content various-content textalign-left valign-middle">

						<h2>Eshop<br/>Launched</h2>
						<h3><a href="shop-list.html">Take a Look</a> at Our Products</h3>

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


export default SlideRight;