const React = require('react');
const ReactDOM = require('react-dom');
const MyComponent = require('./public/components/MyComponent');
const Navigationbar =  require('./public/components/Navbar');
const Sidebar =  require('./public/components/Sidebar');
const Productlist = require('./public/components/Productlist');
const Carousel = require('./public/components/Carousel');
ReactDOM.render(<Navigationbar />, document.getElementById('Navbar'));
ReactDOM.render(<Sidebar />, document.getElementById('Sidebar'));
ReactDOM.render(<Productlist/>, document.getElementById('productlist'));
ReactDOM.render(<Carousel/>, document.getElementById('Carousel'))