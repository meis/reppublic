import Alt      from '../../src/Alt';
import Store    from '../../src/stores/User';
import Actions  from '../../src/actions/Actions';
import {assert} from 'chai';
import UserData from '../../src/utils/fake/user';

describe('UserStore', () => {
  // Restore all stores to original state before each test.
  beforeEach( () => {
    Alt.flush();
  });

  it('sets up instance properties correctly', () => {
    assert.equal(Store.getState().ready, false);
    assert.equal(Store.getState().login, undefined);
    assert.equal(Store.getState().avatar, undefined);
    assert.equal(Store.getState().name, undefined);
  });

  it('updates properties on user update', () => {
    Actions.updateUser(UserData);
    assert.equal(Store.getState().ready, true);
    assert.equal(Store.getState().login, 'meis');
    assert.equal(Store.getState().avatar, 'https://avatars.githubusercontent.com/u/2230093?v=3');
    assert.equal(Store.getState().name, 'Marc Egea i Sala');
  });

  it('resets initial values on request user', () => {
    Actions.requestUser();
    assert.equal(Store.getState().ready, false);
    assert.equal(Store.getState().login, undefined);
    assert.equal(Store.getState().avatar, undefined);
    assert.equal(Store.getState().name, undefined);
  });
});
