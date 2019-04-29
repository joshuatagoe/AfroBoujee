const React = require('react');
class Sidebar extends React.Component{
    render(){

        return(
            <div id="mySidebar" class="sidebar">
                <a href="#" class="closebtn" onClick={this.handleClick}>Musa Keita   <img class="user" src="\img\userdefault.jpg"/></a>
                <p>
                <button><a href="/login">Login</a></button><button><a href="/register">Register</a></button>
                </p>
                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Home 1</a>
                            </li>
                            <li>
                                <a href="#">Home 2</a>
                            </li>
                            <li>
                                <a href="#">Home 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
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