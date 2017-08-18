import React, { Component } from 'react';
import './styles/App.css';

import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuCollapsed: false,
      windowHeight: null,
      windowWidth: null
    };

    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  toggleCollapsed() {

    this.setState({
      menuCollapsed: !this.state.menuCollapsed
    }, () => {console.log(this.state.menuCollapsed);});
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
        <SideMenu
          menuCollapsed={this.state.menuCollapsed}
          toggleCollapsed={this.toggleCollapsed}
        />
      </div>
    );
  }
}

export default App;
