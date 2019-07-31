import axios from 'axios';
var $ = require('jquery');

export const Register = data =>
  axios
    .post('/auth/register', {
      username: data.username,
      email: data.email,
      password: data.password,
      country: data.country,
      age: data.age,
    })

export const Login = user =>
  axios
    .post('/auth/login', {
      email: user.email,
      password: user.password,
    })

export const showRegister_Modal = () =>{
  $('.modal').toggleClass('view');
}