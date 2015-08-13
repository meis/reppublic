import Alt      from '../../src/Alt';
import Store    from '../../src/stores/Repo';
import Actions  from '../../src/actions/Actions';
import {assert} from 'chai';
import RepoData from '../../src/utils/fake/repo';

describe('UserStore', () => {
  // Restore all stores to original state before each test.
  beforeEach( () => {
    Alt.flush();
  });

  it('sets up instance properties correctly', () => {
    assert.equal(Store.getState().ready, false);
    assert.equal(Store.getState().name, undefined);
    assert.equal(Store.getState().repo, undefined);
    assert.equal(Store.getState().login, undefined);
  });

  it('updates properties on repo update', () => {
    Actions.updateRepo(RepoData);
    assert.equal(Store.getState().ready, true);
    assert.equal(Store.getState().login, 'meis');
    assert.equal(Store.getState().name, '2048-solver');
  });

  it('resets initial values on request user', () => {
    Actions.requestRepo();
    assert.equal(Store.getState().ready, false);
    assert.equal(Store.getState().name, undefined);
    assert.equal(Store.getState().repo, undefined);
    assert.equal(Store.getState().login, undefined);
  });
});
