import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*function time(){   
    let clock=new Date().toLocaleTimeString();
    let root=document.getElementById('root');
    let element=(
      <div>
        <h1>显示当前时间</h1>
        <p>{clock}</p>
      </div>
    )
    ReactDOM.render(element,root);
}
setInterval(time,1000);
*/

function Clock(props){
    return (
      <div>
        <h1>time now  </h1>
        <h2>{props.date.toLocaleTimeString()}</h2>
      </div>
    )
    
}
function run(){
    ReactDOM.render(
      <Clock date={new Date()}/>,
      document.getElementById('root')
    )
}
setInterval(run,1000);




/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
