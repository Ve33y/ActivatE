import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form className="SearchBar-submit" onSubmit={this.handleSubmit}>
        <input id="venueType" onChange={this.handleChange} value={this.state.value} placeholder="WHAT'S NEAR ME" />
        <input type="submit" value="Show me" />
      </form>
    );
  }
}

export default SearchBar;
