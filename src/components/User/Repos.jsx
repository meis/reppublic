import React from 'react';
import Actions         from '../../actions/Actions';
import UserStore       from '../../stores/User';
import connectToStores from 'alt/utils/connectToStores';
import Loading         from '../Loading';

class Repos extends React.Component {
  static getStores() {
    return [UserStore];
  }

  static getPropsFromStores() {
    return UserStore.getState();
  }

  componentDidMount() {
    // Ask for repos if they are not present
    if (!this.props.ready) {
      Actions.requestUser(this.props.userId);
    }
  }

  render() {
    return(
      <div>REPOS FROM USER</div>
    );
  }
}

export default connectToStores(Repos);
