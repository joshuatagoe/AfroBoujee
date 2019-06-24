import axios from 'axios';

export const Register = data =>
  axios
    .post('/register', {
      username: data.username,
      email: data.email,
      password: data.password,
      country: data.country,
      age: data.age,
    })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });

export const Login = user =>
  axios
    .post('/login', {
      email: user.email,
      password: user.password,
    })
    .then(res => {
      if (!res.data.error) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
