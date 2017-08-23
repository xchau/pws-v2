import React from 'react';
import '../styles/SideMenu.css';

import { Link } from 'react-router-dom';

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

import { submenuRoutes } from '../routes/submenuRoutes';

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
          {
            submenuRoutes.map((route, idx) => <MenuItem key={idx}>
              {
                props.shouldLink ? <Link to={route.path}>
                  { route.title }
                </Link> :
                <div onClick={() => props.scrollTo(route.path.slice(1))}>
                  { route.title }
                </div>
              }
            </MenuItem>)
          }
        </SubMenu>
        <MenuItem key="7">
          <Link to='/thoughts'>
            <Icon type="smile-o" />
            <span className="nav-text">Thoughts</span>
          </Link>
        </MenuItem>
        <MenuItem key="8">
          <Link to='/about'>
            <Icon type="user" />
            <span className="nav-text">About</span>
          </Link>
        </MenuItem>
        <MenuItem key="9">
          <Link to='/contact'>
            <Icon type="phone" />
            <span className="nav-text">Contact</span>
          </Link>
        </MenuItem>
      </Menu>
    </Sider>
  );
};
