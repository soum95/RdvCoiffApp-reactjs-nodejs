import React from 'react';
import { connect } from 'react-redux';
import Employee from '../components/Beautician';


function EmployeeList({ employees }) {
  if(!employees.length) {
    return (
      <div>
        No employees
      </div>
    )
  }
  return (
    <section>

    <h2>Our Beauticians</h2>

    <div className="row">
        <div className="col-sm-6">

    
              
                {employees.map(employee => {
                    return (
                      <Employee employee={ employee }  key={ employee._id } />
                    );
                  })}
                </div>
            </div>
        

        
     
    

    


</section>
  );
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};



export default connect(
  mapStateToProps
)(EmployeeList);
