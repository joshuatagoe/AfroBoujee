const React = require('react');
class Product extends React.Component{
    render(){

        return(

            <div className="container">
            <img src={this.props.product.imgsrc} alt="Avatar" className="product"/>
            <div className="overlay">{this.props.product.name} : {this.props.product.price}</div>
            </div>
            
        );
        
    }
    handleClick(){
        $('#mySidebar').toggleClass('active');
        $('#main').toggleClass('active');

    }
}

module.exports = Product;