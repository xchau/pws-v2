import React, { Component } from 'react';
import './styles/App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import smoothScroll from 'smoothscroll';
import Layout from 'antd/lib/layout';

import { SideMenu } from './components/SideMenu.js';
import { CustomHeader } from './components/CustomHeader';
import { CustomContent } from './components/CustomContent';
import { CustomFooter } from './components/CustomFooter';

import { Test } from './components/Test';

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };

    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(id) {
    const location = document.getElementById(id);

    if (location) {
      smoothScroll(location);
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      // url: 'https://xchau-pws.herokuapp.com/api/projects'
      url: 'http://localhost:8000/api/projects'
    })
    .then((res) => {
      this.setState({
        projects: res.data
      });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Layout>
            <SideMenu scrollTo={this.scrollTo} />
            <Layout className="app-content-layout">
              <CustomHeader />
              <Content className="content-container">
                <Switch>
                  <Route
                    exact path="/"
                    component={(props) => (
                      <CustomContent {...props}
                        projects={this.state.projects}
                        scrollTo={this.scrollTo}
                      />
                    )}
                  />
                  <Route
                    path="/test"
                    component={(props) => (
                      <Test {...props} />
                    )}
                  />
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
