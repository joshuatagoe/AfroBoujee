export default class AboutMini extends React.Component{

    render(){

        return(
        <div className='miniabout'>
            <div className='title'>
                WHAT IS AFROBOUJEE?
            </div>
            <style jsx>{`
                
                .miniabout{
                    background-color: rgba(204, 150, 15, 0.2);
                    height:30vh;

                }
                
                .title{
                    position: relative;
                    color: #CC960F;
                    font-size: 1.5rem;
                    padding: 5vh;


                }
                
                `}</style>
        </div>
        )

    }

}