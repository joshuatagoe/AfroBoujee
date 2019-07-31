export default class FooterInfo extends React.Component{

    render(){
        return(
            <div className='footer'>
                <div className="data">
                © 2019 Afroboujee, Inc.
                <a href="#">Terms of Use</a>
                <a href="#">Privacy</a>
                </div>
                <style jsx>{`
                    
                    .footer{
                        background-color: white;
                        color: goldenrod;
                        height: 4vh;
                        bottom: 0;
                        text-align: right;

                    }
                    a, a:visited{
                        text-decoration: none;
                        padding-left: 2vw;
                        padding-right: 2vw;
                        color: goldenrod;
                    }
                    .data{
                        position: relative;
                        top: .5vh;
                    }
                    
                    
                    `}</style>
            </div>
        )

    }

}