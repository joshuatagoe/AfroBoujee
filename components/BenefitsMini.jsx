export default class BenefitsMini extends React.Component{

    render(){


        return(
                <div className='benefits'>
                    <div className="benefit border">

                    </div>
                    <div className="benefit border">
                        
                    </div>
                    <div className="benefit border">
                        
                    </div>
                    <div className="benefit border">
                        
                    </div>
                    <div className="benefit border">
                        
                    </div>
                    <div className="benefit">
                        
                    </div>
                    <style jsx>{`
                        
                        .benefits{
                            display: flex;
                            height: 40vh;
                            background-color: lightgrey;

                        }

                        .benefit{
                            position: relative;
                            top: 5vh; 
                            height: 30vh;
                            width: 20vw;
                        }
                        .border{
                            border-right: 1px solid rgba(0, 0, 0, 0.5);
                        }   
                        
                        `}</style>
                </div>
        )

    }

}