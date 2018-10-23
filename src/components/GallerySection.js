import React from 'react';
import {Link} from "react-router-dom";

 class GallerySection extends React.Component {
 render(){
	return (
        <div className="Galleries">
        <section>
<header>
    <div className="container">
        <h2>Gallery</h2>
        <p className="subtitle">See how it looks inside our studio</p>
        <p className="more"><a href="gallery.html" className="c-button m-type-2">Enter Gallery</a></p>
    </div>
</header>

<div className="c-gallery m-paginated" data-items="4" data-items-desktop="4" data-items-desktop-small="3" data-items-tablet="2" data-items-mobile="1">
    <div className="thumb-list">
        <div className="thumb"><a href="images/02.jpg" classNameName="lightbox" data-lightbox-group="gallery"><img src="images/01.jpg"/></a></div>
        <div className="thumb"><a href="images/02.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/02.jpg" alt=""/></a></div>
        <div className="thumb"><a href="images/03.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/03.jpg" alt=""/></a></div>
        <div className="thumb"><a href="images/04.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/04.jpg" alt=""/></a></div>
        <div className="thumb"><a href="images/05.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/05.jpg" alt=""/></a></div>
        <div className="thumb"><a href="images/06.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/06.jpg" alt=""/></a></div>
        <div className="thumb"><a href="images/01.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/01.jpg" alt=""/></a></div>
        <div className="thumb"><a href="images/08.jpg" className="lightbox" data-lightbox-group="gallery"><img src="images/08.jpg" alt=""/></a></div>
    </div>
</div>
</section>
</div>

);
}
}


export default GallerySection;