import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const StatelessComp = () =>{
  return <p>Stateless functional component</p>
}

class StatefullComp extends React.Component{
  render(){
    return <p>Statefull Component</p>
  }
}

root.render(
  <React.StrictMode>
    <StatefullComp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
