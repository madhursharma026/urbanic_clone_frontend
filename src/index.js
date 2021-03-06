import "./Index.css"
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routing from "./Routing";

ReactDOM.render(
  <React.StrictMode>
    <div className='container-md making_mobile_size_scrn p-0 side_scrollbox_start'>
      <Routing />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
