import React from 'react';
import '../styles/Content.css';

import Icon from 'antd/lib/icon';

import { Post } from './Post';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.showSearch) {
      this.props.toggleSearchBar(true);
    }
  }

  render() {
    return (
      <div className="content-box">
        <div className="content-list">
          {
            this.props.projects.map((project, idx) =>
            <Post
              key={idx}
              project={project}
            >
              {project.blurb}
            </Post>)
          }
        </div>
        <div
          className="content-top-box"
          onClick={() => this.props.scrollTo('top')}
          onMouseEnter={this.props.toggleScrollHover}
        >
          <Icon
            className="content-top-icon"
            type="up"
          />
        </div>
      </div>
    );
  }
};

// export const MainContent = (props) => {
//   return (
//     <div className="content-box">
//       <div className="content-list">
//         {
//           props.projects.map((project, idx) =>
//           <Post
//             key={idx}
//             project={project}
//           >
//             {project.blurb}
//           </Post>)
//         }
//       </div>
//       <div
//         className="content-top-box"
//         onClick={() => props.scrollTo('top')}
//         onMouseEnter={props.toggleScrollHover}
//       >
//         <Icon
//           className="content-top-icon"
//           type="up"
//         />
//       </div>
//     </div>
//   );
// };

export default MainContent;
