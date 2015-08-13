import React  from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render: function() {
    let linkParams = {userId: this.props.params.userId};

    return(
      <div>
        REPO

        <Link to="user" params={linkParams}>
          Back to list
        </Link>
      </div>
    );
  },
});
