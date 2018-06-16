import React from 'react';
import SearchBar from './SearchBar'
import DefaultBar from './DefaultBar'


class ReqlyAppBar extends React.Component{
  state = {
    search: false,
  };

  handleChange = event => {
    console.log("handleChange called!");
    this.setState({ ['search']: !this.state.search });
  };

  render () {
    if (this.state.search) {
      return (
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          onHandleChange={this.handleChange}
        />
        );
    } else {
      return (
        <DefaultBar
          onHandleChange={this.handleChange}
        />
      );
    }
  }
}

export default ReqlyAppBar;
