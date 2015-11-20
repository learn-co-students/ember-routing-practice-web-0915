import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var contributors = [Ember.Object.create({name: "Sophie"})];
    return contributors;
  }
});