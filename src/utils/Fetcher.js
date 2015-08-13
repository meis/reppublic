export default {
  userInfo: function(login) {
    return fetch('https://api.github.com/users/' + login)
    .then(function(response) {
      return response.json()
    })
  },

  userRepos: function(login) {
    return fetch('https://api.github.com/users/' + login + '/repos')
    .then(function(response) {
      return response.json()
    })
  },

  repo: function(data) {
    return fetch('https://api.github.com/repos/' + data.login + '/' + data.repo)
    .then(function(response) {
      return response.json()
    })
  },
};

