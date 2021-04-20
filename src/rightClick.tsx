import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.createElement('div');
root.id = 'ne-root';
document.getElementsByTagName('body')[0].prepend(root);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    root
  );
});