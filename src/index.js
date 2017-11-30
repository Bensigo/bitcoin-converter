import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();


// setting up hot module reload 
if(module.hot){
  module.hot.accept()
}