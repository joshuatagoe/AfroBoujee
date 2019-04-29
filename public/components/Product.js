const React = require('react');
class Product extends React.Component{
    render(){

        return(

            <div className="container">
            <img src={this.props.src} alt="Avatar" className="product"/>
            <div className="overlay">This product is for sale</div>
            </div>
            
        );
        
    }
    handleClick(){
        $('#mySidebar').toggleClass('active');
        $('#main').toggleClass('active');

    }
}

module.exports = Product;