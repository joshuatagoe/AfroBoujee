import Navbar from './Navbar'
import Head from 'next/head'
import Searchbar from './Searchbar'
import Menu from './Menu'
import BaseHead from './BaseHead'
import Logo from './Logo'
import Footer from './Footer'
import Register_Modal from './Register-Modal'

import "../styles.scss"


export default class Layout extends React.Component{

    render(){
        return(
            <div>
                <BaseHead/>
                <Logo/>
                <Searchbar/>
                <Menu user={this.props.user}/>
                <Navbar/>
                <Register_Modal />
                {this.props.children}

                <Footer/>
            </div>
        )
    }

}