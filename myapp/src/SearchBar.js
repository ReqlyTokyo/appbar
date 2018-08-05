import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import ClearIcon from '@material-ui/icons/Clear'
import SearchIcon from '@material-ui/icons/Search'
import BackIcon from '@material-ui/icons/KeyboardBackspace'
import { grey } from '@material-ui/core/colors'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import enumToStr from './Utils'

const styles = {
  root: {
    height: 48,
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconButton: {
    opacity: 0.54,
    transform: 'scale(1, 1)',
    transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  iconButtonHidden: {
    transform: 'scale(0, 0)',
    '& > $icon': {
      opacity: 0
    }
  },
  iconButtonDisabled: {
    opacity: 0.38
  },
  searchIconButton: {
    marginRight: -48
  },
  icon: {
    opacity: 0.54,
    transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  input: {
    width: '100%'
  },
  searchContainer: {
    margin: 'auto 16px',
    width: '100%'
  }
}

/**
 * Material design search bar
 * @see [Search patterns](https://material.io/guidelines/patterns/search.html)
 */
class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focus: false,
      value: this.props.value,
      active: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({...this.state, value: nextProps.value})
    }
  }

  handleFocus = (e) => {
    this.setState({focus: true})
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
  }

  handleBlur = (e) => {
    this.setState({focus: false})
    if (this.state.value.trim().length === 0) {
      this.setState({value: ''})
    }
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
  }

  handleInput = (e) => {
    this.setState({value: e.target.value})
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  handleCancel = () => {
    this.props.closeButton()
  }

  handleSearchMode = () => {
    this.props.onHandleChange(this.state.value);
  }

  handleKeyUp = (e) => {
    if (e.charCode === 13 || e.key === 'Enter') {
      // this.props.onRequestSearch(this.state.value)
      this.props.onHandleChange(this.state.value);
    }
    if (this.props.onKeyUp) {
      this.props.onKeyUp(e)
    }
  }

  searchWord = () => {
    //console.log(this.props.search)
    const filter = [(this.props.food === 1 ? "シンプル": ""), 
                    (this.props.procedure === 1 ? "簡単": ""),
                    (this.props.cooktime === 3 ? "30分以内": ""),
                    ...this.props.features.map(a => enumToStr(a)),
                    ...this.props.categories.map(a => enumToStr(a)),
                  ].filter(a => a !== "").join("+");
    if (filter !== "") {
      return "\"" + this.props.value + "\"" + "+" + filter;
    } else {
      return "\"" + this.props.value + "\"" 
    }
  }

  render () {
    const { value } = this.state
    const {
      classes,
      closeIcon,
      disabled,
      onRequestSearch, // eslint-disable-line
      searchIcon,
      style,
      search_mode,
      backButton,
      onHandleChange,
      ...inputProps
    } = this.props

    return (
      <Paper
        className={classes.root}
        style={style}
      >
        <IconButton
          className={classes.iconButton}
          onClick={() => this.props.backButton(this.state.value)}
        >
          <BackIcon />
        </IconButton>

        <div className={classes.searchContainer}>
        {this.props.search_mode ? 
        <Input
            {...inputProps}
            onBlur={this.handleBlur}
            autoFocus
            value={value}
            onChange={this.handleInput}
            onKeyUp={this.handleKeyUp}
            onFocus={this.handleFocus}
            fullWidth
            className={classes.input}
            disableUnderline
            disabled={disabled}
          /> : <div onClick={() => this.props.backButton(this.state.value)}>{this.searchWord()}</div> }
        </div> 
        <IconButton
          onClick={this.handleSearchMode}
          classes={{
            root: classNames(classes.iconButton, classes.searchIconButton, {
              [classes.iconButtonHidden]: !search_mode
            }),
            disabled: classes.iconButtonDisabled
          }}
          disabled={disabled}
        >
          {React.cloneElement(searchIcon, {
            classes: { root: classes.icon }
          })}
        </IconButton>
        <IconButton
          onClick={this.handleCancel}
          classes={{
            root: classNames(classes.iconButton, {
              [classes.iconButtonHidden]: search_mode
            }),
            disabled: classes.iconButtonDisabled
          }}
          disabled={disabled}
        >
          {React.cloneElement(closeIcon, {
            classes: { root: classes.icon }
          })}
        </IconButton>
      </Paper>
    )
  }
}

SearchBar.defaultProps = {
  closeIcon: <ClearIcon style={{ color: grey[500] }} />,
  disabled: false,
  placeholder: 'Search',
  searchIcon: <SearchIcon style={{ color: grey[500] }} />,
  style: null,
  value: ''
}

SearchBar.propTypes = {
  /** Override or extend the styles applied to the component. */
  classes: PropTypes.object.isRequired,
  /** Override the close icon. */
  closeIcon: PropTypes.node,
  /** Disables text field. */
  disabled: PropTypes.bool,
  /** Sets placeholder for the embedded text field. */
  placeholder: PropTypes.string,
  /** Fired when the text value changes. */
  onChange: PropTypes.func,
  onHandleChange: PropTypes.func,
  /** Fired when the search icon is clicked. */
  onRequestSearch: PropTypes.func.isRequired,
  /** Override the search icon. */
  searchIcon: PropTypes.node,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object,
  /** The value of the text field. */
  value: PropTypes.string,
  search_mode: PropTypes.bool,
  backButton: PropTypes.func
}

export default withStyles(styles)(SearchBar)
