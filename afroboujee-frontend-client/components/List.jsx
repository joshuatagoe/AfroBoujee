import Box from './Box'

export default class List extends React.Component{


renderProdBox(item){
   // console.log(item);
    return <Box prod={true} detailed={item.detailed} price={item.price} src={item.src}/>
}

renderBlogBox(item){
   // console.log(item);
    return <Box blog={true} key={item.title} title={item.title} description={item.description} category={item.category} src={item.src}/>
}

render(){
    const List = this.props.items.map((item) =>{
       return <>
           {this.props.prods ? this.renderProdBox(item) : this.renderBlogBox(item)}
       </>
    })
    return(
        <div className="list">
        {List}
        <style jsx>{`
                .list{
                    display: flex;
                    justify-content: center;
                    padding: 2vw;
                    
                }
                
                
                `}</style>
        </div>
        
    )
    
}

}