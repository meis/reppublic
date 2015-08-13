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
            {m.stargazers_count}
          </td>
          <td className="watchers">
            {m.watchers_count}
          </td>
          <td className="forks">
            {m.forks_count}
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
