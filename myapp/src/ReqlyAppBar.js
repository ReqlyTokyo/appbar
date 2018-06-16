import React from 'react';
import SearchBar from './SearchBar'
import DefaultBar from './DefaultBar'


function ReqlyAppBar(props) {
  return (
    <div>
      <DefaultBar />
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
      />
    </div>
  );
}

export default ReqlyAppBar;
