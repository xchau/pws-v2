import React from 'react';

import { Link } from 'react-router-dom';

import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export const ProjectsMenu = (props) => {
  const projects = <span>
    <Icon type="code-o" />
    <span className="">Projects</span>
  </span>;

  return (
    <SubMenu
      key="submenu-1"
      title={projects}
    >
      <MenuItem key="1">
        <Link to="/test">
          <Icon type="user" />
          Project 1
        </Link>
      </MenuItem>
      <MenuItem key="2">
        <Icon type="video-camera" />
        Project 2
      </MenuItem>
      <MenuItem key="3">
        <Icon type="upload" />
        Project 3
      </MenuItem>
    </SubMenu>
  );
};
