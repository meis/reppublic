import React from 'react';
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
      Actions.requestUserRepos(this.props.userId);
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
      return (
        <tr className="repo" key={m.id}>
          <td className="name">
            {m.name}
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
