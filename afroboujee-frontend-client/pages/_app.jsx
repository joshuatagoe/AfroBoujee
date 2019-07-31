import React from "react";
import App, { Container as NextContainer } from "next/app";
import Head from "next/head";
import Searchbar from '../components/Searchbar'
import Menu from '../components/Menu'
import BaseHead from '../components/BaseHead'
import Logo from '../components/Logo'
import Register_Modal from '../components/Register-Modal'


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (ctx.req && ctx.req.session.passport) {
        console.log(ctx.req.session);
        pageProps.user = ctx.req.session.passport.user;
    }
    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: props.pageProps.user
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    const props = {
      ...pageProps,
      user: this.state.user,
    };

    return (
     
      <NextContainer>
            <Head>
          </Head>
          <BaseHead/>
          <Logo/>
          <Searchbar/>
          <Menu user={this.state.user}/>
          {!this.state.user && <Register_Modal />}
            <Component {...props} />
      </NextContainer>
    );
  }
}

export default MyApp;