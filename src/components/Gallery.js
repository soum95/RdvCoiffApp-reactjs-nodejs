import React from 'react';
import {Link} from "react-router-dom";

 class Gallery extends React.Component {
 render(){
	return (
    <div id="wrapper">

      
        <div id="core">

         
            <div id="page-header">
                <div className="container">
                    <h1>Gallery</h1>
                    <ul className="breadcrumbs">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutUs">Salon</Link></li>
                        <li>Gallery</li>
                    </ul>
                </div>
            </div>
            
            <div id="page-content">
                <div className="various-content">

                   
                    <div className="c-gallery">
                        <div className="thumb-list">
                            <div className="thumb"><a href="images/gallery_01.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/01.jpg" /></a></div>
                            <div className="thumb"><a href="images/gallery_02.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/02.jpg" alt=""/></a></div>
                            <div className="thumb"><a href="images/gallery_03.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/03.jpg" alt=""/></a></div>
                            <div className="thumb"><a href="images/gallery_04.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/04.jpg" alt=""/></a></div>
                            <div className="thumb"><a href="images/gallery_06.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/06.jpg" alt=""/></a></div>
                            <div className="thumb"><a href="images/gallery_07.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/01.jpg" alt=""/></a></div>
                            <div className="thumb"><a href="images/gallery_08.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/08.jpg" alt=""/></a></div>
                            <div className="thumb"><a href="images/gallery_05.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/05.jpg" alt=""/></a></div>
                        </div>
                    </div>
                   
                  
                  

                </div>
            </div>
          

        </div>
       
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
                    
                       

                   
                </div>
            </div>
        </div>
    </div>
    
        <footer id="footer">
            <div className="container">

                <div className="footer-twitter m-paginated" data-id="LSVRthemes" data-limit="3" data-interval="12000">
                    <div className="footer-twitter-inner">
                        <i className="ico fa fa-twitter"></i>
                        <h4 className="twitter-title"><a href=""></a></h4>
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
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                  
                                </ul>
                            </nav>
                           

                        </div>
                       
                    </div>
                </div>
                
            

            </div>
        </footer>
      

    </div>

    
    

);
}
}


export default Gallery;