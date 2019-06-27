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

        const Blog = ( <div>
            <img className='blogimage' src={this.props.src}>
            </img>
            <div className='category'>Blog Category</div>
            <div className='title'>Blog Title</div>
            <div className='description'>BLOG DESCRIPTION BLOG DESCRIPTION BLOG DECRIPTION BLOG DESCRIPTION BLOG DESCRIPTION BLOG DESCRIP......</div>
        </div>)

        return <div>
                {this.props.blog && Blog}
                {this.props.prod && Product} 
        </div> 
}
}