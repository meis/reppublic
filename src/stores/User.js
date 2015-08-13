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
      login : undefined,
      avatar: undefined,
      name  : undefined,
    };
  }

  onRequestUser() {
    this.setState(this.initialState());
  }

  onUpdateUser(user) {
    this.setState({
      ready : true,
      login : user.login,
      avatar: user.avatar_url,
      name  : user.name,
    });
  }

  onReset() {
    this.setState(this.initialState());
  }
}

export default Alt.createStore(UserStore, 'UserStore');

