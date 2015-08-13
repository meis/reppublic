import Alt      from 'src/Alt';
import Store    from 'src/stores/User';
import Actions  from 'src/actions/Actions';
import {assert} from 'chai';

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

  it('resets initial values on request user', () => {
    Actions.requestUser();
    assert.equal(Store.getState().ready, false);
    assert.equal(Store.getState().login, undefined);
    assert.equal(Store.getState().avatar, undefined);
    assert.equal(Store.getState().name, undefined);
  });
});
