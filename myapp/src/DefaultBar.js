import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuBar: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      minHeight: 48
  },
  icon: {
      fontSize: 36,
  }
};

class DefaultBar extends React.Component {
  state = {
    anchorEl: null,
  };


  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.menuBar}>
            <Typography variant="title" color="inherit" className={classes.flex}>
              REQLY
            </Typography>
              <div>
                  <IconButton
                    color="inherit"
                    onClick={this.props.onHandleChange}
                  >
                    <Search className={classes.icon}/>
                  </IconButton>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle className={classes.icon}/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>ログイン</MenuItem>
                  <MenuItem onClick={this.handleClose}>無料会員登録</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

DefaultBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefaultBar);
