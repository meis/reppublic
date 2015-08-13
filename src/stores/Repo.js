import Alt     from '../Alt';
import Actions from '../actions/Actions';

export class RepoStore {
  constructor() {
    this.bindActions(Actions);
    this.state = this.initialState();
  }

  initialState() {
    return {
      ready: false,
      repo : undefined,
      login: undefined,
      name : undefined,
    };
  }

  onRequestRepo() {
    this.setState(this.initialState());
  }

  onUpdateRepo(repoData) {
    this.setState({
      ready: true,
      repo : repoData,
      login: repoData.owner.login,
      name : repoData.name,
    });
  }

  onReset() {
    this.setState(this.initialState());
  }
}

export default Alt.createStore(RepoStore, 'RepoStore');
