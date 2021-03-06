import UserData  from './fake/user';
import ReposData from './fake/repos';
import RepoData from  './fake/repo';

export default {
  userInfo: function(login) {
    return this.fakeFetch(UserData);
  },

  userRepos: function(login) {
    return this.fakeFetch(ReposData);
  },

  repo: function(data) {
    return this.fakeFetch(RepoData);
  },

  fakeFetch: function(data) {
    // returning a Promise because that is what fetch does.
    return new Promise(function (resolve, reject) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      setTimeout(function () {
        resolve(data);
      }, 250);
    });
  }
};

