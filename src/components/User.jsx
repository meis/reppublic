import React           from 'react';
import {RouteHandler}  from 'react-router';
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
