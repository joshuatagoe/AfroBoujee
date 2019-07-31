import Searchbar from './Searchbar';

export default class FooterInfo extends React.Component{

    render(){
        return(
            <div className='footer'>

                <ul>
                    <li className="title">TITLE</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>                    
                </ul>
                <ul>
                    <li className="title">TITLE</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>                    
                </ul>
                <ul>
                    <li className="title">TITLE</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>                    
                </ul>
                <ul>
                    <li className="title">TITLE</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>                    
                </ul>
                <ul>
                    <li className="title">TITLE</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>
                    <li>LINK#1</li>                    
                </ul>
                <div className="contact-info">
                <div>Join Us</div>
                <div className="iconlist">
                    <img src={require('../imgs/instagram.svg')} alt=""/>
                    <img src={require('../imgs/twitter.svg')} alt=""/>
                    <img src={require('../imgs/facebook.svg')} alt=""/>
                </div>
                <div className="subscribeinfo">
                New? Subscribe to us for our latest news
                and offerings, as well as info on future
                updates
                </div>
                <input type="text" size="50" className="search" placeholder="Search..." />
                <div className="phone">
                <div>CONTACT US:</div>
                <div>01 888 1100 / 0700 600 0000</div>
                </div>
                </div>
                
                <style jsx>{`
                    
                    .footer{
                        background-color:#707070;
                        color: white;
                        height: 60vh;
                        display: flex;
                        justify-content: space-evenly;

                    }
                    ul{
                        list-style: none;
                        
                    }
                    .title{
                        font-size:2rem;
                        font-weight: bolder;
                    }
                    li{
                        padding: 2vh;
                    }
                    .iconlist{
                        display:flex;
                        justify-content: flex-end;
                    }
                    .iconlist img{
                        padding: .5vw;
                    }
                    .contact-info{
                        display: inline-flex;
                        flex-direction: column;
                        text-align: right;
                        flex: 1;
                        padding-top: 2vh;
                    }
                    .contact-info div{
                        text-align: right;
                        align-items: right;
                    }
                    .subscribeinfo{
                        display: flex;
                        justify-content: flex-end;
                    }
                    
                    `}</style>
            </div>
        )

    }

}