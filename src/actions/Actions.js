import Alt   from '../Alt';
import Fetch from '../utils/Fetcher';

class Actions {
  reset() { this.dispatch }

  // This action receives a petition to fetch user data
  // Triggers action updateUser when the data is feched
  requestUser(login) {
    Fetch.userInfo(login).then((data) => {
      this.actions.updateUser(data);
    })
    // TODO: Add catch action
  }
  updateUser(data) { this.dispatch(data) }

  // This action receives a petition to fetch user repos
  // Triggers action updateUserRepos when the data is feched
  requestUserRepos(login) {
    Fetch.userRepos(login).then((data) => {
      this.actions.updateUserRepos(data);
    })
    // TODO: Add catch action
  }
  updateUserRepos(data) { this.dispatch(data) }

  // This action receives a petition to fetch a particular repo
  // Triggers action updateUserRepos when the data is feched
  requestRepo(data) {
    Fetch.repo(data).then((data) => {
      this.actions.updateRepo(data);
    })
    // TODO: Add catch action
  }
  updateRepo(data) { this.dispatch(data) }
}

export default Alt.createActions(Actions);
