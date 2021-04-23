import React, { Component } from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import ReactFontLoader from 'react-font-loader';

import '../styles/Carousel.css';

import Image_1 from '../images/different-cosmetics-types-scattered-beige-table.jpg';
import Image_2 from '../images/professional-cosmetics-with-copy-space.jpg';

class Show extends Component {
    componentDidMount() {
        (function($) {
            var image = $('#image');
            var carousel = $('.carousel')

            carousel.children(':not(:last)').hide();

            setInterval(function() {
               carousel.children(':last')
                    .fadeOut(2000, function() {$(this).prependTo( carousel ); }).prev()
                    .fadeIn(2000);
            }, 7500)

        }) (jQuery);
    }
    render() {
        return(
            <div className="carousel">
                <div class="image">
                    <div className="second" style={{ backgroundImage: `url(${Image_2})`}}>
                        <div className="sale-box">
                            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap' />
                            <h4 style={{ fontFamily: 'Work Sans' }}>ZĽAVA</h4>
                            <h4 className="number" style={{ fontFamily: 'Work Sans' }}>25%</h4>
                            <a className="products-click" href="#sale_button" style={{ fontFamily: 'Work Sans' }}>
                                <p>PRODUKTY</p>
                            </a>
                        </div>
                    </div>
                </div>            
                <div class="image">
                    <div className="first" style={{ backgroundImage: `url(${Image_1})`}}>
                        <div className="title-box">  
                            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap' />
                            <h2 style={{ fontFamily: 'Open Sans' }}>TVOJ</h2>
                            <h1 style={{ fontFamily: 'Open Sans' }}>OČNÝ MAKEUP</h1>                            
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Show;