export default class Box extends React.Component{
    render(){
        const Product = (<div className="product">
            <img className="imgbox" src={this.props.src}></img>
            {this.props.detailed &&
            (<div></div>
            )}
            {this.props.detailed &&
            (<div></div>
            )}
            <div className="price">{this.props.price}</div>
            <style jsx>{`
                    .price{
                        font-weight: bolder;
                        font-size: 2rem;
                        text-align: right;
                    }

                    .imgbox{
                        max-height: 30vh;
                        max-width: 30vw;
                    }
                    .product{
                        padding: 2vw;
                    }
                    
                    `}</style>
        </div>)

        const Blog = ( <div className="blogbox">
            <img className='blogimage' src={this.props.src}>
            </img>
            <div className='category'>{this.props.category}</div>
            <div className='title'>{this.props.title}</div>
            <div className='description'>{this.props.description}</div>
            <style jsx>{`
                    .title{
                        font-weight: bolder;
                        font-size: 2rem;
                    }
                    .description{
                        font-size: 1rem;
                    }
                    .category{
                        font-size: .5rem;
                        font-weight: lighter;
                    }
                    .blogimage{
                        max-height: 50vh;
                        max-width: 30vw;
                    }
                    .blogbox{
                        padding: 5vw;
                    }
                    
                    `}</style>
        </div>)

        return <div>
                {this.props.blog && Blog}
                {this.props.prod && Product} 
        </div> 
}
}