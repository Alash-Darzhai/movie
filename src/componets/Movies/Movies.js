import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
import { Alert } from 'antd';
import './Movies.css';

export default function Movies({ movies }) {
  const elements = movies.length ? (
    movies.map((item) => {
      const { id, ...itemProps } = item;
      return <Movie key={id} id={id} {...itemProps}></Movie>;
    })
  ) : (
    <Alert
      message="invalid request"
      description="Please enter a valid request"
      type="info"
      showIcon
    />
  );
  return <div className="container">{elements}</div>;
}

Movies.propType = {
  movies: PropTypes.array,
};
