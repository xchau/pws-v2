import React from 'react';

import Icon from 'antd/lib/icon';

export const Contact = (props) => {
  const logoStyle = {
    color: '#303030',
    fontSize: '30px'
  }

  return (
    <div className="content-box">
      <table>
        <tr>
          <td>
            <Icon
              style={logoStyle}
              type="mail"
            />
          </td>
          <td>Email</td>
        </tr>
      </table>
    </div>
  );
};
