import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

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

            {/* {languages.map(
            (language, index) =>
              language.name !== 'English' && (
                <p>Languages (In {language.name}):</p>
              )
          )} */}
            <hr />
          </div>
        )
      );
    }}
  </Query>
);

Countries.propTypes = {};

export default Countries;
