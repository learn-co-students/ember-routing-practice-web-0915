import Ember from 'ember';  
import config from './config/environment';

var Router = Ember.Router.extend({  
  location: config.locationType
});

export default Router.map(function() { 
  this.route('about', { path: 'about' });
  this.route('hello', { path: 'hello' });
  this.route('contributors', function(){
    this.route('sophie');
  });

 
});
