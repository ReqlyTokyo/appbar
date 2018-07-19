import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import FormGroup from '@material-ui/core/FormGroup';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '30px',
    marginRight: '30px',
  },
  formControl: {
    margin: 'auto',
    width: '250px',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  textBox: {
    width: '80px',
    color: '#403f40',
  }
});

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
};

class MultipleSelect extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.preset == null) {
      console.log("preset undefined");
      this.state = {
        name: []
      };
    } else {
      this.state = {
        name: this.props.preset
      };
    }
  }

  handleChange = event => {
    this.setState({ name: event.target.value});
  };

  handleDelete = event => () => {
    this.setState(state => {
        const name = [...state.name];
        const chipToDelete = name.indexOf(event);
        name.splice(chipToDelete, 1);
        return { name };
    });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <FormGroup row className={classes.root}>
        <p className={classes.textBox}>{this.props.label}</p>
        <FormControl className={classes.formControl}>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => <Chip key={value} label={value} className={classes.chip} onDelete={this.handleDelete(value)}/>)}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {this.props.names.map(name => (
              <MenuItem
                key={name}
                value={name}
                style={{
                  fontWeight:
                    this.state.name.indexOf(name) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium,
                }}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);
