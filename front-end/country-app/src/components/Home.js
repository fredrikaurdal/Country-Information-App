import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  background-color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Home = () => {
  return (
    <Fragment>
      <Button>
        <Link to="/countries" style={{ textDecoration: 'none' }}>
          Countries
        </Link>
      </Button>
    </Fragment>
  );
};

export default Home;
