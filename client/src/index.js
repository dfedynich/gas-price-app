import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'modern-normalize';

const title = 'The Gas Price App';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}