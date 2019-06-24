import MenuIcon from './Menu-icon'
import { Person, Store as Manager, Notifications} from '@material-ui/icons';

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
                    <MenuIcon menutext="PROFILE"><Person/></MenuIcon>
                    <MenuIcon menutext="DASHBOARD"><Manager/></MenuIcon>
                    <MenuIcon menutext="NOTIFICATIONS"><Notifications/></MenuIcon>
            </div>
        )
        const LoggedOutMenu = (
            <MenuIcon menutext="PROFILE"><Person/></MenuIcon>
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