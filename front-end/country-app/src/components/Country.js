import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const Country = ({ match }) => (
  <Query
    query={gql`
      {
        country(code: "${match.params.code.toUpperCase()}") {
          name
          native
          currency
          phone
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <h1>Loading...</h1>;
      if (error) return <h2>404 - The API is down</h2>;

      const { name, native, currency, phone } = data.country;

      return (
        <Fragment>
          <p>Name (English): {name}</p>
          <p>Name (Native): {native}</p>
          <p>Currency: {currency}</p>
          <p>Phone Counry Code: +{phone}</p>
        </Fragment>
      );
    }}
  </Query>
);

Country.propTypes = {
  match: PropTypes.string.isRequired
};

export default Country;
