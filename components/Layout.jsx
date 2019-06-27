import Navbar from './Navbar'
import Head from 'next/head'
import Searchbar from './Searchbar'
import Menu from './Menu'
import BaseHead from './BaseHead'
import Logo from './Logo'
import Footer from './Footer'
import "../styles.scss"


export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <Head>
                    <title>AfroBoujee</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
                </Head>
                <BaseHead/>
                <Logo/>
                <Searchbar/>
                <Menu/>
                <Navbar/>
                {this.props.children}

                <Footer/>
            </div>
        )
    }

}