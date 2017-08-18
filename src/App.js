import React, { Component } from 'react';
import './styles/App.css';

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

import { CustomHeader } from './components/CustomHeader';

const { Content, Footer, Sider } = Layout;
const MenuItem = Menu.Item;

// import { SideMenu } from './components/SideMenu';

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
        <Layout>
          <Sider
            className="app-sider"
          >
            <div className="logo" />
            <Menu
              mode="inline"
              theme="light"
            >
              <MenuItem key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </MenuItem>
              <MenuItem key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </MenuItem>
              <MenuItem key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </MenuItem>
              <MenuItem key="4">
                <Icon type="bar-chart" />
                <span className="nav-text">nav 4</span>
              </MenuItem>
              <MenuItem key="5">
                <Icon type="cloud-o" />
                <span className="nav-text">nav 5</span>
              </MenuItem>
              <MenuItem key="6">
                <Icon type="appstore-o" />
                <span className="nav-text">nav 6</span>
              </MenuItem>
              <MenuItem key="7">
                <Icon type="team" />
                <span className="nav-text">nav 7</span>
              </MenuItem>
              <MenuItem key="8">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </MenuItem>
            </Menu>
          </Sider>
          <Layout className="app-content-layout">
            <CustomHeader />
            <Content className="app-content-container">
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                ...
                <br />
                Really
                <br />...<br />...<br />...<br />
                long
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />
                content
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
