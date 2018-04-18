import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
