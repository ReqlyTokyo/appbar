import React from 'react';
import SearchBar from './SearchBar'
import DefaultBar from './DefaultBar'


class ReqlyAppBar extends React.Component{
  render () {
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
}

export default ReqlyAppBar;
