import React from 'react';

import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export const SideMenu = (props) => {
  return (
    <Row>
      <Col xs={1} sm={3} md={4}></Col>
      <Col xs={22} sm={18} md={16}>
        <div style={{ width: 240 }}>
          <Button type="primary" onClick={props.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={props.menuCollapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={props.menuCollapsed}
          >
            <MenuItem key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </MenuItem>
            <MenuItem key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </MenuItem>
            <MenuItem key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </MenuItem>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <MenuItem key="5">Option 5</MenuItem>
              <MenuItem key="6">Option 6</MenuItem>
              <MenuItem key="7">Option 7</MenuItem>
              <MenuItem key="8">Option 8</MenuItem>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <MenuItem key="9">Option 9</MenuItem>
              <MenuItem key="10">Option 10</MenuItem>
              <SubMenu key="sub3" title="Submenu">
                <MenuItem key="11">Option 11</MenuItem>
                <MenuItem key="12">Option 12</MenuItem>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>
      </Col>
      <Col xs={1} sm={3} md={4}></Col>
    </Row>
  );
};
