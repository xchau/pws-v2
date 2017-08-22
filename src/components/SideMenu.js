import React from 'react';
import '../styles/SideMenu.css';

import { Link } from 'react-router-dom';

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export const SideMenu = (props) => {
  const projects = <span>
    <Icon type="code-o" />
    <span className="">Projects</span>
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
          key="submenu-1"
          title={projects}
        >
          <MenuItem key="1">
            {/* <Link to="/test"> */}
            <div onClick={() => props.scrollTo('blip')}>
              Blip
            </div>
            {/* </Link> */}
          </MenuItem>
          <MenuItem key="2">
            <Link to="/test">
              this.city
            </Link>
          </MenuItem>
          <MenuItem key="3">
            <Link to="/test">
              LENDit
            </Link>
          </MenuItem>
          <MenuItem key="4">
            <Link to="/test">
              Miser
            </Link>
          </MenuItem>
          <MenuItem key="5">
            <Link to="/test">
              React Snake
            </Link>
          </MenuItem>
          <MenuItem key="6">
            <Link to="/test">
              Geofindr
            </Link>
          </MenuItem>
        </SubMenu>
        <MenuItem key="7">
          <Icon type="smile-o" />
          <span className="nav-text">Thoughts</span>
        </MenuItem>
        <MenuItem key="8">
          <Icon type="user" />
          <span className="nav-text">About</span>
        </MenuItem>
        <MenuItem key="9">
          <div onClick={() => props.scrollTo('miser')}>
            <Icon type="phone" />
            <span className="nav-text">Contact</span>
          </div>
        </MenuItem>
      </Menu>
    </Sider>
  );
};
