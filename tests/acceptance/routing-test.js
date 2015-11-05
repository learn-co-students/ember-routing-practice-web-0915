import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'hello-ember/tests/helpers/start-app';

module('Acceptance | routing', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /hello', function(assert) {
  visit('/hello');

  andThen(function() {
    assert.equal(currentURL(), '/hello');
  });
});


test('/hello should render hello template', function(assert) {
  visit('/hello');
  andThen(() => assert.equal(find('h4').text(), 'Hello!'));
});

test('visiting /about', function(assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});


test('/about should render about template', function(assert) {
  visit('/about');
  andThen(() => assert.equal(find('h4').text(), 'About'));
});

