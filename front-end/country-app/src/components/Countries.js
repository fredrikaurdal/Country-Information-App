import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

// Get all countries and associated languages
const GET_ALL_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
      languages {
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

      return data.countries.map(({ name, code, continent, languages }) => (
        <div key={code}>
          <p>Name: {name}</p>
          <p>Continent: {continent.name}</p>
          <p>Languages (In English):</p>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>{language.name}</li>
            ))}
          </ul>
          {/* <ul>
            {languages.map(language => (
              <li>{language.name}</li>
            ))}
          </ul> */}
          <hr />
        </div>
      ));
    }}
  </Query>
);

Countries.propTypes = {};

export default Countries;
