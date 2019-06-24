export default class Slider extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            images: [
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
              ],

            currentIndex: 0
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(evt){
        evt.persist()
        this.setState({
            currentIndex : evt.target.attributes.value.value
        })
        console.log(this.state.currentIndex);
    }

    render(){

        const slidebuttons = this.state.images.map((src, index)=> <span className="dot" value={index} onClick={this.handleClick} key={index}></span>);
        
        return(
            <div>
                <img src={this.state.images[this.state.currentIndex]}/> 
                <div className="slidebuttons">{slidebuttons}</div>            
                <style jsx>{`
                img{
                    width: 100%;
                    max-height: 60vh;
                } 

                .slidebuttons{
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    text-align: "center";
                }
                    
                `}</style>
            </div>

            
        )
    }


}