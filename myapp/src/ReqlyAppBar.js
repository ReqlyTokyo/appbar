import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar'


function ReqlyAppBar(props) {
  const { classes } = props;
  return (
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
    />
  );
}

ReqlyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ReqlyAppBar;
