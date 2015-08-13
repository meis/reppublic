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
      <div className="wrapper">
      <div className="content">
        <div className="header">
          <div className="inner">
            <div className="title">
              Popular repositories
            </div>
              {this.props.ready? this.userInfo() : ''}
          </div>
        </div>
      <div>
        {this.props.ready? this.withUserData() : this.withoutUserData()}
      </div>
      </div>
      </div>
    );
  }

  userInfo() {
    return(
      <div className="user-info">
        <img src={this.props.avatar} />
        <div className="name">{this.props.name}</div>
      </div>
    );
  }

  withUserData() {
    return(
      <RouteHandler />
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
