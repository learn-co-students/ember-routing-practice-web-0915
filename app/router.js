import Ember from 'ember';  
import config from './config/environment';

var Router = Ember.Router.extend({  
  location: config.locationType
});


Router.map(function() {
  this.route('/');
  this.route('about');
  this.route('hello');
  this.route('contributors/sophie'), function() {
    this.route('sophie');
  };
});



export default Router.map(function() {  
 
});

