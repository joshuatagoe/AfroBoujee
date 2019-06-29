import LoginForm from './Login'

export default class MenuIcon extends React.Component{
    render(){

        return(
            <div className="menu-button">
            <div>
            <div className="menu-icon" >{this.props.children}</div>
            <span className="menu-text" >{this.props.menutext}</span>
            </div>
            {this.props.menutext=="PROFILE" && <div className="menu-dropdown">
                <LoginForm/>
            </div>}
            <style jsx>{`

            .menu-text{
            font-size: 1vh;
            }
            .large-icon{
            position: relative;
            width: 2em;
            height: 2em;
            }
            .nodisplay{
            display: none;
            }
            .novisibility{
            visibility: hidden;
            }
            .menu-button{
            position: relative;
            color: gray;
            padding: 4px;
            border-left: 1px solid black;
            transition: color 1s, fill 1s;
            cursor: pointer;
            z-index:1000;

            }

            .menu-dropdown{
                display: none;
                position: absolute;
                background-color: white;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

            }
            .menu-dropdown a {
                color: white;
                position: relative;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }

            .menu-icon{
                text-align: center;
            }
            .menu-button:hover{
                color: goldenrod;
                fill: goldenrod;
            }

            .menu-dropdown a:hover{
                background-color: goldenrod;
            }

            .menu-button:hover .menu-dropdown{
                display: block;
            }


            `}</style>
            </div>
        )
    }
}