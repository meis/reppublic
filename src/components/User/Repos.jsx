import React           from 'react';
import {Link}          from 'react-router';
import Actions         from '../../actions/Actions';
import ReposStore      from '../../stores/UserRepos';
import connectToStores from 'alt/utils/connectToStores';
import Loading         from '../Loading';

class Repos extends React.Component {
  static getStores() {
    return [ReposStore];
  }

  static getPropsFromStores() {
    return ReposStore.getState();
  }

  componentDidMount() {
    // Ask for repos if they are not present
    if (!this.props.ready) {
      Actions.requestUserRepos(this.props.params.login);
    }
  }

  render() {
    return(
      <div>
        {this.props.ready? this.withReposData() : this.withoutReposData()}
      </div>
    );
  }

  withReposData() {
    let repos = this.props.repos.map((m) => {
      let linkParams = {login: this.props.params.login, repo:m.name};

      return (
        <tr className="repo" key={m.id}>
          <td className="name">
            <Link to="repo" params={linkParams}>
              {m.name}
            </Link>
          </td>
          <td className="stargazers">
            <span className="octicon octicon-star"></span>
            <span className="count">{m.stargazers_count}</span>
          </td>
          <td className="watchers">
            <span className="octicon octicon-eye"></span>
            <span className="count">{m.watchers_count}</span>
          </td>
          <td className="forks">
            <span className="octicon octicon-git-branch"></span>
            <span className="count">{m.forks_count}</span>
          </td>
        </tr>
      );
    });

    return(
      <table className="repos">
        {repos}
      </table>
    );
  }

  withoutReposData() {
    return(
      <Loading />
    );
  }
}

export default connectToStores(Repos);
