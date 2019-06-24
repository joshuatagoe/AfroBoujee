export default class MenuIcon extends React.Component{
    render(){
        return(
                <div className="menu-button">
                        <span className="menu-text" >{this.props.menutext}</span>
                        <div className="menu-icon" >{this.props.children}</div>
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
                        padding: 4px;
                        border-left: 1px solid black;
                        transition: opacity color 1s;
                        cursor: pointer;
                    }
                    .menu-icon{
                        text-align: center;
                        transition: opacity color 1s;
                    }
                    .menu-button:hover{
                        color: goldenrod;
                        opacity: 1;
                    }

                    `}</style>
                </div>
        )
    }
}