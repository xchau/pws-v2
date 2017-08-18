import React, { Component } from 'react';
import './styles/App.css';

import Button from 'antd/lib/button';
import { Header } from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: null,
      windowWidth: null
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener(
      'resize',
      this.updateWindowDimensions
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.updateWindowDimensions
    );
  }

  render() {
    return (
      <div className="app-container">
        <Header
          windowWidth={this.state.windowWidth}
        />
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
