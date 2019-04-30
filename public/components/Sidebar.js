const React = require('react');
class Sidebar extends React.Component{
    render(){

        return(
            <div id="mySidebar" class="sidebar">
                <a href="#" class="closebtn" onClick={this.handleClick}>Musa Keita   <img class="user" src="\img\userdefault.jpg"/></a>
                <ul class="list-unstyled components">
                <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/user/Musa Keita II">Profile Page</a>
                    </li>
                    <li>
                        <a href="/mystores">My Stores</a>
                    </li>
                    <li>
                        <a href="/check">Cart</a>
                    </li>
                </ul>
                </div>
        );
        
    }
    handleClick(){
        $('#mySidebar').toggleClass('active');
        $('#main').toggleClass('active');

    }
}

module.exports = Sidebar;