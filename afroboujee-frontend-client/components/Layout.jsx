import Navbar from './Navbar'
import Footer from './Footer'
import "../styles.scss"


export default class Layout extends React.Component{

    render(){
        return(
            <div>
                <Navbar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }

}