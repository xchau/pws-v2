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
import { Project } from './components/Project';
import { NoMatch } from './components/NoMatch';

import { filterArr } from './util/helpers';

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: '',
      allProjects: null,
      projects: null,
      searched: false
    };

    this.clearSearch = this.clearSearch.bind(this);
    this.filterProjects = this.filterProjects.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  clearSearch() {
    this.setState({
      projects: this.state.allProjects,
      searched: false
    });
  }

  filterProjects(keywords, projects) {
    const filtered = filterArr(keywords, projects);

    this.setState({
      projects: this.state.allProjects
    }, () => {
      this.setState({
        keywords,
        projects: filtered,
        searched: true
      });
    });
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
      url: 'https://xchau-pws-server.herokuapp.com/api/projects',
      headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
    	}
    })
    .then((res) => {
      this.setState({
        allProjects: res.data,
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
                    scrollTo={this.scrollTo}
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
                      clearSearch={this.clearSearch}
                      filterProjects={this.filterProjects}
                      keywords={this.state.keywords}
                      allProjects={this.state.allProjects}
                      searched={this.state.searched}
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
                    this.state.projects ? this.state.projects.map((project, idx) => <Route
                      key={idx}
                      path={`/${project.pathName}`}
                      component={(props) => (
                        <Project {...props}
                          scrollTo={this.scrollTo}
                          data={project}
                        />
                      )}
                    />) : null
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
