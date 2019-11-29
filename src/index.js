import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './service-worker';


export function App() {
  return ( 
    <div>
      Hello World
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();