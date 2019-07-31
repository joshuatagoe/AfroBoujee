import MenuProfilebuttons from './Menu-Profilebuttons';
import ReactSVG from 'react-svg'
import MenuIcon from './Menu-icon'

export default class Menu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className="menu">
                <MenuIcon menutext="DISCOVER" Link="/discover"><ReactSVG src="/static/imgs/discover.svg"/></MenuIcon>
                <MenuProfilebuttons user={this.props.user}></MenuProfilebuttons>
                <MenuIcon menutext="CART" Link="/cart"><ReactSVG src="/static/imgs/cart.svg"/></MenuIcon>
            <style jsx>{`
                    .menu{
                        display: inline-flex;
                        justify-content: flex-end;
                        position: relative;
                        top: 1.5vh;
                        z-index: 1000;
                        right: 10vw;
                        float: right;
                    }
                
                `}</style>
            </div>
        )
    }
}