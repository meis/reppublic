import Alt     from '../Alt';
import Actions from '../actions/Actions';

export class UserStore {
  constructor() {
    this.bindActions(Actions);
    this.state = this.initialState();
  }

  initialState() {
    return {
      ready : false,
      sort  : 'stargazers_count',
      repos : [],
    };
  }

  onRequestUserRepos() {
    this.setState(this.initialState());
  }

  onUpdateUserRepos(reposData) {
    let repos = reposData.sort( (a,b) => {
      if (a[this.state.sort] < b[this.state.sort]) {
        return 1;
      }
      if (a[this.state.sort] > b[this.state.sort]) {
        return -1;
      }
      return 0;
    });

    this.setState({
      ready : true,
      repos : repos,
      sort  : 'stargazers_count',
    });
  }

  onReset() {
    this.setState(this.initialState());
  }
}

export default Alt.createStore(UserStore, 'UserReposStore');
