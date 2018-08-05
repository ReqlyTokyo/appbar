import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReqlyAppBar from './ReqlyAppBar'

ReactDOM.render(<ReqlyAppBar search="きゅうり" food={1} cooktime={0} procedure={0} user_sign_in={false} features={[6]}/>, document.getElementById('root'));

//ReactDOM.render(<ReqlyAppBar search="" food={0} cooktime={0} procedure={0} user_sign_in={false} features={[]} />, document.getElementById('root'));
