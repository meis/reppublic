import Alt       from 'src/Alt';
import Store     from 'src/stores/UserRepos';
import Actions   from 'src/actions/Actions';
import {assert}  from 'chai';
import ReposData from 'src/utils/fake/repos';

describe('UserStore', () => {
  // Restore all stores to original state before each test.
  beforeEach( () => {
    Alt.flush();
  });

  it('sets up instance properties correctly', () => {
    assert.equal(Store.getState().ready, false);
    assert.equal(Store.getState().repos.length, 0);
    assert.equal(Store.getState().sort, 'stargazers_count');
  });

  it('updates properties on user update', () => {
    Actions.updateUserRepos(ReposData);
    assert.equal(Store.getState().ready, true);
    assert.equal(Store.getState().repos.length, 20);
  });

  it('stores repos sorted', () => {
    Actions.updateUserRepos(ReposData);
    let repos = Store.getState().repos;

    for ( let i = 0; i < repos.length; i++ ) {
      let current = repos[i];
      let next    = repos[i+1];

      if (next) {
        assert.ok( current['stargazers_count'] >= next['stargazers_count']);
      }
    }
  });

  it('resets initial values on request user', () => {
    Actions.requestUserRepos();
    assert.equal(Store.getState().ready, false);
    assert.equal(Store.getState().repos.length, 0);
    assert.equal(Store.getState().sort, 'stargazers_count');
  });
});
