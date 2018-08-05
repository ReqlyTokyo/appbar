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
  state = {}
/*
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
*/

  render() {
    const { classes } = this.props;
    const categories = [6, 7, 8, 9, 10] //["主食・丼", "主菜", "副菜", "汁もの", "スイーツ"];
   // const features = ["基本", "ヘルシー", "お弁当", "朝ごはん", "おつまみ"];
    const features_map = [12, 11, 5, 1, 4];

    return (
      <div >
        <Grid container
          spacing={0}
          justify="center"
          className={classes.top}>
          <Grid item>
            <SelectableChip label="30分以内" selected={this.props.cooktime === 3} onHandleChange={() => this.props.onHandleChange("cooktime")}/>
          </Grid>
          <Grid item>
            <SelectableChip label="調理簡単" selected={this.props.procedure === 1} onHandleChange={() => this.props.onHandleChange("procedure")}/>
          </Grid>
          <Grid item>
            <SelectableChip label="食材シンプル" selected={this.props.food === 1} onHandleChange={() => this.props.onHandleChange("food")}/>
          </Grid>
        </Grid>
        <MultipleSelect
          label="カテゴリ"
          names={categories}
          preset={this.props.categories}
          onHandleFeaturesChange={this.props.onHandleCategoriesChange}
          onHandleFeaturesDelete={this.props.onHandleCategoriesDelete}
        />
        <MultipleSelect
          label="特徴"
          names={features_map}
          preset={this.props.features}
          onHandleFeaturesChange={this.props.onHandleFeaturesChange}
          onHandleFeaturesDelete={this.props.onHandleFeaturesDelete}
        />
      </ div>
    );
  }
}

FilterAssist.propTypes = {
  classes: PropTypes.object.isRequired,
  onHandleChange: PropTypes.func
};

export default withStyles(styles)(FilterAssist);
