import Ember from 'ember';

export default Ember.Component.extend({
  collapsed: true,

  actions: {
    collapse() {
      this.toggleProperty('collapsed');
    }
  }

});
