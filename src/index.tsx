import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();

// if ((module as any).hot) {
//   (module as any).hot.accept('./App', () => {
//     renderApp();
//   });
// }
