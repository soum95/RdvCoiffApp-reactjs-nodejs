
import React from 'react';



export default ({ employee: { firstname,lastname,job,img, description,_id } }) => {
  return (

    <div className="c-team-member m-has-portrait" style={{marginLeft:'50px'}}>
<div className="member-inner">      
    <p className="member-portrit"><span><img src={img} alt=""/></span></p>
   <h4 className="member-name">{firstname} {lastname}</h4>
   <h3 className="member-role">{job}</h3>
   <div className="member-description">
                                       <p>{description} </p>
                                   </div>
                                   <ul className="member-social">
                                       <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                       <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                   </ul>
                                   </div>
                                   </div>    
  );
};