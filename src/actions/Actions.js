import Alt   from '../Alt';
import Fetch from '../utils/FakeFetcher';

class Actions {

    reset() { this.dispatch }

    // This action receives a petition to fetch user data
    // Triggers action updateUser when the data is feched
    requestUser(login) {
      this.dispatch(login);

      Fetch.userInfo().then((data) => {
        this.actions.updateUser(data);
      })
      // TODO: Add catch action
    }
    updateUser(data) { this.dispatch(data) }
}

export default Alt.createActions(Actions);
