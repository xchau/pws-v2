import React, { Component } from 'react';

import App from '../App';

export default function wrapApp(Comp) {
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
}
