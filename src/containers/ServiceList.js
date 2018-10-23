import React from 'react';
import { connect } from 'react-redux';
import Service from '../components/Service';
import { deleteService } from '../actions';
import { Link } from 'react-router-dom';
function ServiceList({ services }) {
  if(!services.length) {
    return (
      <div>
        No Services
      </div>
    )
  }
  return (
    <div id="wrapper">

	
    <div id="core" class="core-bg-1">

      
      <div id="page-header">
        <div class="container">
          <h1>Services</h1>
          <ul class="breadcrumbs">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutUs">Salon</Link></li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    

      <div class="container">

      
        <div id="page-content">
          <div class="various-content">

            
          
            <section id="hairdressing">

              <h2>Hairdressing</h2>

              <div class="row">
              
                <div class="col-sm-10">

                
                  <ul class="c-accordion">
                  {services.map(service => {
                    return (
                      <Service service={ service }  key={ service._id } />
                    );
                  })}
                  </ul>
                

                </div>
              </div>

            </section>
          

            
            <section>

              <div class="c-cta-message">
                <div class="row">
                  <div class="col-md-8">
                    <h2>Did you find a service for you?</h2>
                    <p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                  </div>
                  <div class="col-md-4">
                    <p class="textalign-right">
                      <Link to="/Appointement" class="c-button m-open-ajax-modal">Make a Reservation</Link>
                    </p>
                  </div>
                </div>
              </div>
        

            </section>
        

          </div>
        </div>
    

      </div>

    </div>
    

  </div>
  );
}

const mapStateToProps = state => {
  return {
    services: state.services
  };
};



export default connect(
  mapStateToProps
)(ServiceList);