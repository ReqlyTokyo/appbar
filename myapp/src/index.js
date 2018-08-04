import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReqlyAppBar from './ReqlyAppBar'

ReactDOM.render(<ReqlyAppBar search="きゅうり" filter={{easy: true}}/>, document.getElementById('root'));
