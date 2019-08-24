import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <Fragment>
      <Link to="/countries">Countries</Link>
    </Fragment>
  );
};

Home.propTypes = {};

export default Home;
