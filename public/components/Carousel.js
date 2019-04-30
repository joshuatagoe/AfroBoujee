const React = require('react');
class Carousel extends React.Component{
    render(){

        return(
            <div id="myCarousel " class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="\img\kora.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="\img\mbira.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="\img\mankala.jpg" alt="Third slide"/>
                </div>
                <div>
                <a class="carousel-control-prev"   href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next"  href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            </div>
        );
        
    }
}

module.exports = Carousel;