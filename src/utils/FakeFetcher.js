import UserData from './fake/user';

export default {
  userInfo: function(login) {
    // returning a Promise because that is what fetch does.
    return new Promise(function (resolve, reject) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      setTimeout(function () {
        resolve(UserData);
      }, 250);
    });
  }
};

