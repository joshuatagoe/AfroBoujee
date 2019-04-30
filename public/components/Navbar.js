const React = require('react');
//part of code taken from https://getbootstrap.com/docs/4.0/components/navbar/
class Navbar extends React.Component {
	render() {
		return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
                    <a class="navbar-brand" href="#">Musa</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mystores">Stores</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Countries
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item disabled" href="#">Ghana</a>
                        <a class="dropdown-item disabled" href="#">Nigeria</a>
                        <a class="dropdown-item disabled" href="#">Kenya</a>
                        <a class="dropdown-item disabled" href="#">Morocco</a>
                        <a class="dropdown-item disabled" href="#">Egypt</a>
                        <a class="dropdown-item disabled" href="#">Mali</a>
                        <a class="dropdown-item disabled" href="#">Botswana</a>
                        <a class="dropdown-item disabled" href="#">South Africa</a>
                        <a class="dropdown-item disabled" href="#">Angola</a>
                        <a class="dropdown-item disabled" href="#">Rwanda</a>                        

                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/market">Centralized Market Place</a>
                        </div>
                    </li>
                    </ul>
                    </div>
                <div>
                <button class="openbtn nobg" onClick={this.cart}><img class="cart" src="\img\cart.png"/></button>
                </div>
  <button class="openbtn nobg" onClick={this.handleClick}><p>Musa Keita    </p><img class="user" src="\img\userdefault.jpg"/></button> 
</nav>
		);
    }
    
    handleClick(){
        $('#mySidebar').toggleClass('active');
        $('#main').toggleClass('active');
        
    }

    cart(){
        location.href="/check";
    }
}


module.exports = Navbar;