import React           from 'react';
import {RouteHandler}  from 'react-router';
import Actions         from '../actions/Actions';
import UserStore       from '../stores/User';
import connectToStores from 'alt/utils/connectToStores';
import Loading         from './Loading';

class User extends React.Component {
  static getStores() {
    return [UserStore];
  }

  static getPropsFromStores() {
    return UserStore.getState();
  }

  componentDidMount() {
    // Ask for user if user is not ready
    if (!this.props.ready) {
      Actions.requestUser(this.props.userId);
    }
  }

  render() {
    return(
      <div>
        {this.props.ready? this.withUserData() : this.withoutUserData()}
      </div>
    );
  }

  withUserData() {
    return(
      <div>
        <div>USER</div>
        <RouteHandler />
      </div>
    );
  }

  withoutUserData() {
    return(
      <div>
        <Loading />
      </div>
    );
  }
}

export default connectToStores(User);
