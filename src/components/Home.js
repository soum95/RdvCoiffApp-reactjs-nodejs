
import React from 'react';
import Header from './Header';
import Services from './Services';
import GallerySection from './GallerySection';
import SlideRight from './SlideRight';
import NewsletterSection from './NewsletterSection';

export default class slideLeft extends React.Component {
    render(){
        return (
    <div id="wrapper" style={{marginTop: '-70px'}}>
    <div id="core">    
        <div id="page-content">
            <div className="various-content" >
            <SlideRight/>
            <Services/>
            <GallerySection/>
       
            <NewsletterSection/>
               

            </div>
        </div>
      

    </div>


    

</div>
);
}
}
