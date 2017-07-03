/**
 * Created by vinothjeevanandam on 6/27/17.
 */

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term : props.term};
  }
  render() {
    return (
      <div>
        <input
        value = {this.state.term}
        onChange={event => {
          this.setState({term: event.target.value});
          this.props.onSearchTerm(this.state.term);
        }} />
      </div>
    );
  }
}

export default SearchBar;


