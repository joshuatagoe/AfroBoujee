import {Login} from '../js/UserFunctions'
import Router from 'next/router' 

export default class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }

    onSubmit(evt){
        evt.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        Login(user).then(
            res=>{
                if(res.error){
                    alert(res.error)
                }
                Router.push('/')
            }
        )

    }

    render(){

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange}></input>
                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }



}