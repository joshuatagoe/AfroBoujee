import {Login , showRegister_Modal as toggle} from '../js/UserFunctions'
import Router from 'next/router' 
export default class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            modal: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }

    onSubmit(evt){
        evt.preventDefault();
        console.log("test");
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        Login(user).then(
            res=>{
                if(res.error){
                    alert(res.error)
                }
               //Router.push('/register')
            }
        )
    }

    openRegister(evt){
        evt.preventDefault();
        this.setState({
           modal : true
        })
    }

    closeRegister(evt){
        evt.preventDefault();
        this.setState({
            modal: false
        })
    }

    render(){

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <span>Username</span>
                    <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange}></input>
                    <span>Password</span>
                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}></input>
                    <div className="buttons"><button className="login" type="submit">Login</button><button type="button" onClick={toggle} className="register">Register</button></div>
                </form>

                <style jsx>{`
                    span{
                        font-weight: bolder;
                    }
                
                    input[type=email], input[type=password] {
                        width: 100%;
                        padding: 12px 20px;
                        margin: 8px 0;
                        display: inline-block;
                        border: 1px solid #ccc;
                        box-sizing: border-box;
                        }
                    .login:hover{
                        bottom: .5vh;
                        opacity: 1;
                        box-shadow: 0px .5vh #888888;

                    }
                    .register:hover{
                        
                        bottom:.5vh;
                        opacity: 1;
                        box-shadow: 0px .5vh #888888;
                    
                    }
                    .buttons{
                        display: flex;
                        justify-content: space-evenly;
                    }
                    
                    .login {
                        position: relative;
                        background-color:black;
                        color: white;
                        padding: 16px;
                        font-size: 1.5rem;
                        border: none;
                        opacity: .5;
                        transition: opacity 1s;
                    }   

                    .register{
                        position: relative;
                        background-color: black;
                        color: goldenrod;
                        padding: 16px;
                        font-size: 1.5rem;
                        border: none;
                        opacity: .5;
                        transition: bottom 1s, opacity 1s;

                    } 

                    
                    `}</style>
            </div>
        )
    }



}