const React = require('react');
const Product = require('./Product');
class Productlist extends React.Component{
    render(){

        return(

            <div class="container">
                <div class="row">
                    <div class="col">
                    <Product src="\img\kora.jpg"/>
                    </div>
                </div>
            </div>
            
        );
        
    }
    handleClick(){
        $('#mySidebar').toggleClass('active');
        $('#main').toggleClass('active');

    }
}

module.exports = Productlist;