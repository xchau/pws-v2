import React, { Component } from 'react';
import './styles/App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import smoothScroll from 'smoothscroll';
import Layout from 'antd/lib/layout';

import { SideMenu } from './components/SideMenu.js';
import { CustomHeader } from './components/CustomHeader';
import { CustomContent } from './components/CustomContent';
import { CustomFooter } from './components/CustomFooter';

import { Test } from './components/Test';

const { Content } = Layout;
const routes = [
  {
    path: '/',
    exact: true,
    comp: CustomContent
  },
  {
    path: '/test',
    comp: Test
  }
];

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
      <Router>
        <div className="app-container">
          <Layout>
            <SideMenu scrollTo={this.scrollTo} />
            <Layout className="app-content-layout">
              <CustomHeader />
              <Content>
                <Switch>
                  {
                    routes.map((route, idx) => (
                      <Route
                        key={idx}
                        exact={route.exact}
                        path={route.path}
                        component={route.comp}
                      />
                    ))
                  }
                </Switch>
              </Content>
              <CustomFooter />
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
};

export default App;
