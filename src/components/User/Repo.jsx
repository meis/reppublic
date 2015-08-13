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
    if (!this.props.ready || this.props.params.login != this.props.login || this.props.params.repo != this.props.name) {
      Actions.requestRepo({
        login: this.props.params.login,
        repo: this.props.params.repo,
      });
    }
  }

  render() {
    return(
      <div>
        {this.props.ready? this.withData() : this.withoutData()}
      </div>
    );
  }

  withData() {
    let linkParams = {login: this.props.params.login};

    return(
      <div className="repo-page">
        <div className="repo-header">
          <div className="name">
            {this.props.name}
          </div>
          <div className="stats">
            <span className="stat stargazers">
              <span className="octicon octicon-star"></span>
              <span className="count">{this.props.repo.stargazers_count}</span>
            </span>
            <span className="stat watchers">
              <span className="octicon octicon-eye"></span>
              <span className="count">{this.props.repo.watchers_count}</span>
            </span>
            <span className="stat forks">
              <span className="octicon octicon-git-branch"></span>
              <span className="count">{this.props.repo.forks_count}</span>
            </span>
          </div>
        </div>

        <div className="description">
          {this.props.repo.description}
        </div>

        <Link to="user" params={linkParams}>
          Back to list
        </Link>
      </div>
    );
  }

  withoutData() {
    return(
      <Loading />
    );
  }
}

export default connectToStores(Repo);
