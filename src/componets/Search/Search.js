import React, { Component } from 'react';
import { Input } from 'antd';
import './Search.css';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

export default class Search extends Component {
  state = {
    value: '',
  };

  onChangeValue = (e) => {
    this.setState({ value: e.target.value });
    const { value } = this.state;
    this.debouncedSearch(value);
  };

  debouncedSearch = debounce((value) => {
    this.props.search(value);
  }, 500);

  render() {
    return (
      <div className="form">
        <Input placeholder="Type to search..." onChange={this.onChangeValue} />
      </div>
    );
  }
}

Search.propType = {
  search: PropTypes.func,
};
