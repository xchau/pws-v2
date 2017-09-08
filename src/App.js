import React, { Component } from 'react';
import './styles/App.css';
import './styles/responsive.css';

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
import { About } from './components/About';
// import { Contact } from './components/Contact';
import { Project } from './components/Project';
import { NoMatch } from './components/NoMatch';

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
      // url: 'https://xchau-pws-server.herokuapp.com/api/projects'
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
            <Switch>
              <Route
                exact path="/"
                component={(props) => (
                  <SideMenu
                    scrollTo={this.scrollTo}
                    shouldLink={false}
                  />
                )}
              />
              <Route
                path="*"
                component={(props) => (
                  <SideMenu
                    shouldLink={true}
                  />
                )}
              />
            </Switch>
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
                    this.state.projects.map((project, idx) => <Route
                      key={idx}
                      path={`/${project.pathName}`}
                      component={(props) => (
                        <Project {...props}
                          scrollTo={this.scrollTo}
                          data={project}
                        />
                      )}
                    />)
                  }
                  <Route
                    path="/about"
                    component={(props) => (
                      <About {...props}
                        showSearch={this.state.showSearch}
                        toggleSearchBar={this.toggleSearchBar}
                      />
                    )}
                  />
                  {/* <Route
                    path="/contact"
                    component={(props) => (
                      <Contact {...props}
                        showSearch={this.state.showSearch}
                        toggleSearchBar={this.toggleSearchBar}
                      />
                    )}
                  /> */}
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
