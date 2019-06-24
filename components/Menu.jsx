import MenuProfilebuttons from './Menu-Profilebuttons';
import { Apps, ShoppingCart } from '@material-ui/icons';
import MenuIcon from './Menu-icon'

export default class Menu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className="menu">
                <MenuIcon menutext="DISCOVER"><Apps/></MenuIcon>
                <MenuProfilebuttons></MenuProfilebuttons>
                <MenuIcon menutext="CART"><ShoppingCart/></MenuIcon>
            <style jsx>{`
                    .menu{
                        opacity: 0.5;
                        display: inline-flex;
                        justify-content: flex-end;
                        position: relative;
                        top: 1.5vh;
                        padding-left: 10vw;
                    }
                
                `}</style>
            </div>
        )
    }
}