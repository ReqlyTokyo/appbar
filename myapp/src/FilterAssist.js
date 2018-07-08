import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Grid from '@material-ui/core/Grid';
import SelectableChip from './SelectableChip'
import MultipleSelect from './MultipleSelect'


const styles = {
  top: {
    marginTop: '15px',
  },
};

class FilterAssist extends React.Component {
  state = {};

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div >
        <Grid container
          spacing={0}
          justify="center"
          className={classes.top}>
          <Grid item>
            <SelectableChip label="30分以内"/>
          </Grid>
          <Grid item>
            <SelectableChip label="簡単"/>
          </Grid>
          <Grid item>
            <SelectableChip label="シンプル食材"/>
          </Grid>
        </Grid>
        <MultipleSelect
          label="カテゴリ"
          names={["主食・丼", "主菜", "副菜", "汁もの", "スイーツ"]}
        />
        <MultipleSelect
          label="特徴"
          names={["基本", "ヘルシー", "お弁当", "朝ごはん", "おつまみ"]}
        />
      </ div>
    );
  }
}

FilterAssist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterAssist);
