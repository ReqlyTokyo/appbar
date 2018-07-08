import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReqlyAppBar from './ReqlyAppBar'
import FilterAssist from './FilterAssist'

ReactDOM.render(<ReqlyAppBar />, document.getElementById('root'));
ReactDOM.render(<FilterAssist />, document.getElementById('body'));
