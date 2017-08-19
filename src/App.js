import React, { Component } from 'react';
import './styles/App.css';

import smoothScroll from 'smoothscroll';

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';

import { SideMenu } from './components/SideMenu.js';
import { CustomHeader } from './components/CustomHeader';
import { CustomContent } from './components/CustomContent';
import { CustomFooter } from './components/CustomFooter';

const { Sider } = Layout;
const MenuItem = Menu.Item;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuCollapsed: false,
      windowHeight: null,
      windowWidth: null
    };

    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(id) {
    smoothScroll(document.getElementById(id));
  }

  render() {
    return (
      <div className="app-container">
        <Layout>
          <SideMenu scrollTo={this.scrollTo} />
          <Layout className="app-content-layout">
            <CustomHeader />
            <CustomContent scrollTo={this.scrollTo} />
            <CustomFooter />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
