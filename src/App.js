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

import { CustomHeader } from './components/CustomHeader';
import { SideMenu } from './components/SideMenu';
import { MainContent } from './components/MainContent';
import { CustomFooter } from './components/CustomFooter';
import { NoMatch } from './components/projects/NoMatch';

import {routes} from './components/routes/routes';

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
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
      console.log(res.data);
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
              <Switch>
                <Route
                  exact path="/"
                  component={(props) => (
                    <CustomHeader
                      showSearch={true}
                    />
                  )}
                />
                <Route
                  path="*"
                  component={(props) => (
                    <CustomHeader
                      showSearch={false}
                    />
                  )}
                />
              </Switch>
              <Content className="content-container">
                <Switch>
                  <Route
                    exact path="/"
                    component={(props) => (
                      <MainContent {...props}
                        projects={this.state.projects}
                        scrollTo={this.scrollTo}
                        showSearch={this.state.showSearch}
                        toggleSearchBar={this.toggleSearchBar}
                      />
                    )}
                  />

                  {
                    routes.map((route, idx) => <Route
                      key={idx}
                      path={route.path}
                      component={(props) => (
                        <route.comp {...props}

                        />
                      )}
                    />)
                  }

                  <Route
                    path="*"
                    component={(props) => (
                      <NoMatch {...props}
                        showSearch={this.state.showSearch}
                        toggleSearchBar={this.toggleSearchBar}
                      />
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
