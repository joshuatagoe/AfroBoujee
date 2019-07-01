import MenuIcon from './Menu-icon'
import ReactSVG from 'react-svg'


export default class MenuProfilebuttons extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const LoggedInMenu = (
            <>
                    <MenuIcon menutext="PROFILE"><ReactSVG src="/static/imgs/profile.svg"/></MenuIcon>
                    <MenuIcon menutext="DASHBOARD"><ReactSVG src="/static/imgs/manager.svg"/></MenuIcon>
                    <MenuIcon menutext="NOTIFICATIONS"><ReactSVG src="/static/imgs/notifications.svg"/></MenuIcon>
            </>
        )
        const LoggedOutMenu = (
            <>
            <MenuIcon menutext="PROFILE"><ReactSVG src="/static/imgs/profile.svg"/></MenuIcon>
            </>

            
        )
        let renderthis=null;
        if (typeof window !== 'undefined') {
            console.log(this.props.user);
            renderthis = this.props.user ? LoggedInMenu : LoggedOutMenu

        }
        console.log(this.props.user);
        return(
            renderthis
        )
    }

}