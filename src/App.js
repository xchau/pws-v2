import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './styles/App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col
            // className="app-col"
            xs={12} sm={3} md={2} lg={1}>
              a
            </Col>
            <Col  xs={6} sm={6} md={8} lg={10} />
            <Col  xs={6} sm={3} md={2} lg={1} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
