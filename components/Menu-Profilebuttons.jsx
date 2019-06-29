import MenuIcon from './Menu-icon'
import ReactSVG from 'react-svg'


export default class MenuProfilebuttons extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            username : ""
        }
    }

    render(){
        const LoggedInMenu = (
            <div>
                    <MenuIcon menutext="PROFILE"><ReactSVG src="/static/imgs/profile.svg"/></MenuIcon>
                    <MenuIcon menutext="DASHBOARD"><ReactSVG src="/static/imgs/manager.svg"/></MenuIcon>
                    <MenuIcon menutext="NOTIFICATIONS"><ReactSVG src="/static/imgs/notifications.svg"/></MenuIcon>
            </div>
        )
        const LoggedOutMenu = (
            <>
            <MenuIcon menutext="PROFILE"><ReactSVG src="/static/imgs/profile.svg"/></MenuIcon>
            </>

            
        )
        let renderthis=null;
        if (typeof window !== 'undefined') {
            renderthis = localStorage.userToken ? LoggedInMenu : LoggedOutMenu

        }
        return(
            renderthis
        )
    }

}