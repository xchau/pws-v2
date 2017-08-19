import React from 'react';
import '../styles/SideMenu.css';

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export const SideMenu = (props) => {
  const projects = <span>
    {/* <Icon type="mail" /> */}
    <span>Projects</span>
  </span>;

  return (
    <Sider
      className="sidemenu-sider"
    >
      <div className="logo" />
      <Menu
        mode="inline"
        theme="light"
      >
        <SubMenu
          key="sub1"
          title={projects}
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
        </SubMenu>

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
          <span onClick={() => props.scrollTo('next')} className="nav-text">nav 8</span>
        </MenuItem>
      </Menu>
    </Sider>
  );
};
