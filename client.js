const React = require('react');
const ReactDOM = require('react-dom');
const MyComponent = require('./public/components/MyComponent');
const Navigationbar =  require('./public/components/Navbar');
const Sidebar =  require('./public/components/Sidebar');
ReactDOM.render(<Navigationbar />, document.getElementById('Navbar'));
ReactDOM.render(<Sidebar />, document.getElementById('Sidebar'));
