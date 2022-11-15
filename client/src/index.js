import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


// ReactDOM.render(
//   <div>
//     <h1>Hello, Sneakerhead</h1>
//     <App />
//   </div>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);