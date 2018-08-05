import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar'
import FilterAssist from './FilterAssist'
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  return {
    width: '100%',
    height: '100%',
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
});

class SearchModalButton extends React.Component {
  state = {
    open: true,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    //this.setState({ open: false });
    this.props.onHandleChange()
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{display: 'flex'}}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
              onHandleChange={this.props.onHandleChange}
              search_mode={true}
              value={this.props.search}
              backButton={this.props.backButton}
              features={this.state.features}
              categories={this.state.categories}
            />
            <FilterAssist
              onHandleChange={this.props.onHandleFilterChange}
              food={this.props.food}
              cooktime={this.props.cooktime}
              procedure={this.props.procedure}
              features={this.props.features}
              categories={this.props.categories}
              onHandleFeaturesChange={this.props.onHandleFeaturesChange}
              onHandleFeaturesDelete={this.props.onHandleFeaturesDelete}
              onHandleCategoriesChange={this.props.onHandleCategoriesChange}
              onHandleCategoriesDelete={this.props.onHandleCategoriesDelete}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

SearchModalButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onHandleFilterChange: PropTypes.func,
  backButton: PropTypes.func,
  onHandleChange: PropTypes.func,
};

export default withStyles(styles)(SearchModalButton);
