import React from 'react';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

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

// Get all countries and associated languages
const GET_ALL_COUNTRIES = gql`
  {
    countries {
      name
      native
      code
      emoji
      languages {
        code
        name
      }
      continent {
        name
      }
    }
  }
`;

const Countries = () => (
  <Query query={GET_ALL_COUNTRIES}>
    {({ loading, error, data }) => {
      if (loading) return <h1>Loading...</h1>;
      if (error) return <h2>404 - The API is down</h2>;

      return data.countries.map(
        ({ name, native, code, continent, languages }) => (
          <div key={code}>
            <p>Name (English): {name}</p>
            <p>Name (Native): {native}</p>
            <p>Continent: {continent.name}</p>
            <p>Languages:</p>
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{language.name}</li>
              ))}
            </ul>
            <Button>
              <Link
                to={`/countries/${code}`}
                style={{ textDecoration: 'none' }}
              >
                {name} Page
              </Link>
            </Button>
            <hr />
          </div>
        )
      );
    }}
  </Query>
);

export default Countries;
