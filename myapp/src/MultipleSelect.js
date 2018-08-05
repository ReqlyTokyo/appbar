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
import enumToStr from './Utils'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '30px',
    marginRight: '30px',
  },
  mxauto: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  formControl: {
    width: '250px',
  },
  select: {
    minHeight: '50px', 
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
    marginTop: '2px',
    marginBottom: '2px',
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
    this.setState({ name: event.target.value });
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
        <div className={classes.mxauto}>
          <p className={classes.textBox}>{this.props.label}</p>
          <FormControl className={classes.formControl}>
            <Select
              multiple
              value={this.props.preset}
              onChange={this.props.onHandleFeaturesChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(value => <Chip key={value} label={enumToStr(value)} className={classes.chip} onDelete={this.props.onHandleFeaturesDelete(value)}/>)}
                </div>
              )}
              className={classes.select}
              MenuProps={MenuProps}
            >
              {this.props.names.map(name => (
                <MenuItem
                  key={name}
                  value={name}
                  style={{
                    fontWeight:
                      this.props.preset.indexOf(name) === -1
                        ? theme.typography.fontWeightRegular
                        : theme.typography.fontWeightMedium,
                  }}
                >
                  {enumToStr(name)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </FormGroup>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);
