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
      constructor(props) {
        super(props);
        this.state = {
          user: props.pageProps
        };
      }
    

    render(){
        return(
            <div>
                <BaseHead/>
                <Logo/>
                <Searchbar/>
                <Menu user={this.state.user}/>
                <Navbar/>
                <Register_Modal />
                {this.props.children}

                <Footer/>
            </div>
        )
    }

}

Layout.getInitialProps = async function(ctx) {
  let pageProps = {};
  pageProps = await Component.getInitialProps(ctx);
  if (ctx.req && ctx.req.session.passport) {
    //console.log(ctx.req.session);
    pageProps.user = ctx.req.session.passport.user;
  }
  console.log(pageProps);
  return { pageProps };
}
