import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions/index';
import classnames from 'classnames';
import Popup from "reactjs-popup";
import Login from '../components/Login';
class Appointement  extends Component {
    render() {
     
        return(
        
<div className="various-content" style={{marginLeft :'400px',marginTop:'40px'}}>

<h2>Make a Reservation</h2>
<p>Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>


<form >
    <input type="hidden" name="reservation-form"/>

    
    <p class="c-alert-message m-warning m-validation-error" style={{display: 'none'}}><i class="ico fa fa-exclamation-circle"></i>Please fill in all required (*) fields.</p>
    
    <p class="c-alert-message m-warning m-request-error" style={{display: 'none'}}><i class="ico fa fa-exclamation-circle"></i>There was a connection problem. Try again later.</p>
    

    <div class="form-field">
        <h5 class="form-field-title">Hairdressing</h5>
        <ul class="checkbox-list">
            <li>

                <input type="checkbox" class="checkbox-input" id="reservation-service-2-1" name="reservation-services[]" value="Wash"/>
                <label for="reservation-service-2-1">Wash</label>
                

            </li>
            <li>

                
                <input type="checkbox" class="checkbox-input" id="reservation-service-2-2" name="reservation-services[]" value="Cut & Finish"/>
                <label for="reservation-service-2-2">Cut & Finish</label>
            

            </li>
            <li>

                
                <input type="checkbox" class="checkbox-input" id="reservation-service-2-3" name="reservation-services[]" value="Blow Dries"/>
                <label for="reservation-service-2-3">Blow Dries</label>
            

            </li>
            <li>

                
                <input type="checkbox" class="checkbox-input" id="reservation-service-2-4" name="reservation-services[]" value="Hair Colouring & Highlights"/>
                <label for="reservation-service-2-4">Hair Colouring & Highlights</label>
                

            </li>
        </ul>
    </div>
    

    <hr class="c-divider"/>

    <div class="row">
        <div class="col-sm-6">

            
            <div class="form-field">
                <label for="reservation-name">Your Name <span>*</span></label>
                <input id="reservation-name" name="reservation-name" class="m-required"/>
            </div>
            
            <div class="form-field">
                <label for="reservation-email">Your Email Address <span>**</span></label>
                <input id="reservation-email" name="reservation-email" class="m-required-one m-email"/>
            </div>
            <p style={{display: 'none'}}>
                <label for="reservation-email-hp">Re Email Address</label>
                <input id="reservation-email-hp" name="reservation-email-hp"/>
            </p>
            
            <div class="form-field">
                <label for="reservation-phone">Your Phone Number <span>**</span></label>
                <input id="reservation-phone" name="reservation-phone" class="m-required-one"/>
            </div>
            

        </div>
        <div class="col-sm-6">

        
            <div class="form-field">
                <label for="reservation-date">Preferred Date & Time</label>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="datepicker-input" data-date-format="mm/dd/yy" data-first-day="0">
                            <input type="datetime" id="reservation-date" name="reservation-date"/>
                            <i class="fa fa-calendar"></i>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <select class="selectbox-input" id="reservation-time" name="reservation-time">
                            <option value="9:00">9:00</option>
                            <option value="9:30">9:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div class="form-field">
                <label for="reservation-note">Note</label>
                <textarea id="reservation-note" name="reservation-note"></textarea>
            </div>
            
            <div class="form-field">
                <button class="submit-btn c-button" type="submit" data-label="Send Message" data-loading-label="Sending...">Send Message</button>
            </div>


        </div>
    </div>

    
    <div class="form-note">
        <p><span>*</span> required field</p>
        <p><span>**</span> fill at least one of those please</p>
    </div>


</form>


</div>
        );
    }
}
export  default connect()(Appointement)
// import React from 'react';

// class NewPost extends React.Component {
//   state = {
//     title: '',
//     body: ''
//   };

//   handleInputChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.title.trim() && this.state.body.trim()) {
//       this.props.onAddPost(this.state);
//       this.handleReset();
//     }
//   };

//   handleReset = () => {
//     this.setState({
//       title: '',
//       body: ''
//     });
//   };

//   render() {
//     return (

//       <div>
//       <ul>
//   <li >
//     <span><a href="index.html">Front Page</a></span>
//   </li>
//   <li>
//     <span><a href="services.html">Pages</a></span>
//     <ul class="sub-menu">
//       <li><a href="services.html">Services</a></li>
//       <li><a href="about-us.html">About Us</a></li>
//       <li><a href="gallery.html">Gallery</a></li>
      
//     </ul>
//   </li>
  
  
//   <li>
//     <span><a href="contact.html">Contact</a></span>
//   </li>
// </ul>
//           <form onSubmit={ this.handleSubmit }>
//           <div className="form-group">
//               <input
//               type="text"
//               placeholder="Title"
//               className="form-control"
//               name="title"
//               onChange={ this.handleInputChange }
//               value={ this.state.title }
//             />
//           </div>
//           <div className="form-group">
//             <textarea
//               cols="19"
//               rows="8"
//               placeholder="Body"
//               className="form-control"
//               name="body"
//               onChange={ this.handleInputChange }
//               value={ this.state.body }>
//             </textarea>
//           </div>
//           <div className="form-group">
//             <button type="submit" className="btn btn-primary">Add Post</button>
//             <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
//               Reset
//             </button>
//           </div>
//         </form>
//       </div>

//     );
//   }
// }

// export default NewPost;