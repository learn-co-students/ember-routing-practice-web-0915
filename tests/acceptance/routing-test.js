import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';


describe('Acceptance: Routing', function() {
  var application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('shows the landing page', function() {
    visit('/');

    andThen(function() {
      expect(find('h2').text()).to.eq("Welcome to Ember Routing Practice!");
    });
  });

  it('has a link to the hello page', function(){
    visit('/');
    andThen(function(){
      let link = $("li.hello a");
      expect(link.text()).to.eq('hello');
      expect(link.attr('href')).to.eq('/hello');
    });
  });

  it('shows the hello page', function(){
    visit('/');
    click(".hello a");
    andThen(function() {
      expect(find('h4').text()).to.eq("Hello!");
    });
  });

  it('has a link to the about page', function(){
    visit('/');
    andThen(function(){
      let link = $("li.about a");
      expect(link.text()).to.eq('about');
      expect(link.attr('href')).to.eq('/about');
    });
  });

  it('shows the about page', function(){
    visit('/');
    click(".about a");
    andThen(function() {
      expect(find('h4').text()).to.eq("About");
    });
  });

  it('shows the individual contributors pages, nested under /contributors', function(){
    visit('/contributors/sophie');
    andThen(function() {
      expect(find('p').text()).to.eq("Sophie is a contributor to this project.");
    });
  });
});

