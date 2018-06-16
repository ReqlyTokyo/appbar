import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar'
import DefaultBar from './DefaultBar'


function ReqlyAppBar(props) {
  const { classes } = props;
  return (
    <DefaultBar />
  );
}

ReqlyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ReqlyAppBar;
