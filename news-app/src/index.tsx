import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './router';

ReactDOM.render(
  // instead of pointing to App, Points to AppRouter as startpoint.
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
