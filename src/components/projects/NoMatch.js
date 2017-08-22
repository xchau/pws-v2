import React from 'react';

// export const NoMatch = (props) => {
//   return (
//     <div className="content-box">
//       NO MATCH
//     </div>
//   );
// };

class NoMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.showSearch) {
      this.props.toggleSearchBar(false);
    }
  }

  render() {
    return (
      <div className="content-box">
        NO MATCH
      </div>
    );
  }
};

export default NoMatch;
