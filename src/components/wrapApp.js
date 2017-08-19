import React, { Component } from 'react';

import App from '../App';

export const wrapApp = (Comp) => {
  class Wrapper extends Component {

    render() {
      return (
        <App>
          <Comp {...this.props} />
        </App>
      );
    }
  }

  return Wrapper;
};
