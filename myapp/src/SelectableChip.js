import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const defaultStyle = {
  borderRadius: 32,
  border:'solid 1px #ff3366',
  backgroundColor: 'rgba(255, 204, 216, 0.2)',
  color: '#ff3366',
};

const selectedStyle = {
  borderRadius: 32,
  border:'solid 1px white',
  backgroundColor: '#ff3366',
  color: 'white',
};

const styles = theme => ({
  button: {
    margin: '10px'
  },
});

class SelectableChip extends React.Component{

  handleChange = event => {
    this.setState({ ['selected']: !this.state.selected });
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
  }

  render () {
    const { classes } = this.props;
    if (this.state.selected) {
      return (
        <Button
          variant="outlined"
          className={classes.button}
          style={selectedStyle}
          onClick={this.handleChange}
        >
        {this.props.label}
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          className={classes.button}
          style={defaultStyle}
          onClick={this.handleChange}
        >
        {this.props.label}
        </Button>
      )
    }
  }
}

export default withStyles(styles)(SelectableChip);
