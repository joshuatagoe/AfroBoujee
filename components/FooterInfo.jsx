export default class FooterInfo extends React.Component{

    render(){
        return(
            <div className='footer'>

                <ul>
                    <li className="title">Title</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>                    
                </ul>
                <ul>
                    <li className="title">Title</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>                    
                </ul>
                <ul>
                    <li className="title">Title</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>                    
                </ul>
                <ul>
                    <li className="title">Title</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>                    
                </ul>
                <ul>
                    <li className="title">Title</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>
                    <li>Link#1</li>                    
                </ul>
                
                
                <style jsx>{`
                    
                    .footer{
                        background-color:#707070;
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
                    
                    `}</style>
            </div>
        )

    }

}