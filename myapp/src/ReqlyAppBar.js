import React from 'react';
import SearchBar from './SearchBar'
import DefaultBar from './DefaultBar'
import SearchModalButton from './SearchModalButton'
const features_map = [12, 11, 5, 1, 4];

class ReqlyAppBar extends React.Component{
  state = {
    search_mode: false,
    search: this.props.search,
    food: this.props.food, // 0 is false, 1 is simple.
    cooktime: this.props.cooktime, // 0 is default, 
    procedure: this.props.procedure, // 0 is default, 1 is easy.
    features: this.props.features.filter(a => features_map.indexOf(a) >= 0), // array
    categories: this.props.features.filter(a => a >= 6 && a <= 10 )
  };

  handleChange = event => {
    console.log("handleChange called!");
    const search_word = event === undefined ? "" : event ;
    this.setState({search: search_word, search_mode:  !this.state.search_mode });
  };

  backButton = event => {
    if (this.state.search_mode) {
      this.setState({
        search: "",
        food: 0,
        cooktime: 0,
        procedure: 0,
        features: [],
        categories: [],
        search_mode: false
      });
    } else {
      this.handleChange(event);
    }
  }

  closeButton = () => {
    this.setState({
      search: "",
      food: 0,
      cooktime: 0,
      procedure: 0,
      features: [],
      categories: [],
      search_mode: true
    });
  }
  handleFilterChange = event => {
    console.log(event)
    if (event === "food") {
      if (this.state.food === 0) {
        this.setState({food: 1})
      } else {
        this.setState({food: 0})
      }
    } else if (event === "cooktime") {
      if (this.state.cooktime === 0) {
        this.setState({cooktime: 3})
      } else {
        this.setState({cooktime: 0})
      }
    } else if (event === "procedure") {
      if (this.state.procedure === 0) {
        this.setState({procedure: 1})
      } else {
        this.setState({procedure: 0})
      }
    }
  }

  handleFeaturesChange = event => {
    console.log(event.target.value)
    this.setState({ features: event.target.value});
  };

  handleFeaturesDelete = event => () => {
    this.setState(state => {
        const features = [...state.features];
        const chipToDelete = features.indexOf(event);
        features.splice(chipToDelete, 1);
        return { features };
    });
  }

  handleCategoriesChange = event => {
    console.log(event.target.value)
    this.setState({ categories: event.target.value});
  };

  handleCategoriesDelete = event => () => {
    this.setState(state => {
        const categories = [...state.categories];
        const chipToDelete = categories.indexOf(event);
        categories.splice(chipToDelete, 1);
        return { categories };
    });
  }

  render () {
    if (this.state.search_mode) {
      // Search mode
      return (<SearchModalButton
        onHandleFilterChange={this.handleFilterChange}
        onHandleChange={this.handleChange}
        onHandleFeaturesChange={this.handleFeaturesChange}
        onHandleFeaturesDelete={this.handleFeaturesDelete}
        onHandleCategoriesChange={this.handleCategoriesChange}
        onHandleCategoriesDelete={this.handleCategoriesDelete}
        search={this.state.search}
        food={this.state.food}
        cooktime={this.state.cooktime}
        procedure={this.state.procedure}
        features={this.state.features}
        categories={this.state.categories}
        backButton={this.backButton}
        closeButton={this.closeButton}
        />)
    } else if (this.state.search !== "" || this.state.food !== 0 || this.state.cooktime !== 0 || this.state.procedure !== 0 || this.state.features.length > 0) {
      // Search Result
      return (
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          onHandleChange={this.handleChange}
          value={this.state.search}
          food={this.state.food}
          cooktime={this.state.cooktime}
          procedure={this.state.procedure}
          search_mode={this.state.search_mode}
          features={this.state.features}
          categories={this.state.categories}
          backButton={this.backButton}
          closeButton={this.closeButton}
        />
        );
    } else {
      // Default Bar
      return (
        <DefaultBar
          onHandleChange={this.handleChange}
          user_sign_in={this.props.user_sign_in}
        />
      );
    }
  }
}

export default ReqlyAppBar;
