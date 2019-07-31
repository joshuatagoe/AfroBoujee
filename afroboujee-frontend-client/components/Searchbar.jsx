export default class Searchbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search : ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    onChange(evt){
        this.setState({ search : evt.target.value})
    }

    onSubmit(evt){
        evt.preventdefault();
        alert(this.state.search);
    }

    render(){
        return (
            <div id='searchbar'>
                <form onSubmit={this.onSubmit}>
                <input type="text" size="70" className="search" onChange={this.onChange} value={this.state.search} placeholder="Search..." />
                <button type="submit"><i className="glyphicon glyphicon-search"></i></button>
                </form>
                <style jsx>{`
                    #searchbar{
                        position: relative;
                        top: 3vh;
                        display: inline-block;
                        padding-left: 5vw;
                        
                    }
                    .input  {
                        border-width: thin;
                        border-color: black;
                        font-size: 5px;
                        cursor: pointer;
                    }
                    button{
                        position: relative;
                        background-color: rgba(0, 0, 0, 0);
                        border: none;
                        color: none;
                        top: 0.5vh;
                        left: -2.5vw;
                        padding: 5px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        cursor: pointer;
                            }
                
                `}</style>
            </div>
        )
    }
}