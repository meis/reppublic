import React           from 'react';
import {Link}          from 'react-router';
import Actions         from '../../actions/Actions';
import RepoStore       from '../../stores/Repo';
import connectToStores from 'alt/utils/connectToStores';
import Loading         from '../Loading';

class Repo extends React.Component {
  static getStores() {
    return [RepoStore];
  }

  static getPropsFromStores() {
    return RepoStore.getState();
  }

  componentDidMount() {
    // Ask for repos if they are not present
    if (!this.props.ready || this.props.params.userId != this.props.login || this.props.params.repo != this.props.name) {
      Actions.requestRepo({
        login: this.props.params.userId,
        repo: this.props.params.repo,
      });
    }
  }

  render() {
    let linkParams = {userId: this.props.params.userId};

    return(
      <div>
        REPO

        <Link to="user" params={linkParams}>
          Back to list
        </Link>
      </div>
    );
  }
}

export default connectToStores(Repo);
