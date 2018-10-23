import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/index';
import { withRouter } from 'react-router-dom';
import Login from '../components/Login'
import Popup from "reactjs-popup";
import Appointement from '../components/Appointement'
class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const isAuthenticated= this.props.auth;
       const user = this.props.auth;
      
        const authLinks = (
           
            <Popup  >
            {close => (
              <div >
              
              <Appointement/>
                
                <div className="content">
                  {" "}
             
                </div>
                
              </div>
            )}
          </Popup>
              
                
                
        )
      const guestLinks = ( 
            <Login/>
      )
        return(
          <div>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));