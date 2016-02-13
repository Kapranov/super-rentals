import Ember from 'ember';

/*
  The add hard-coded data as the return value of the model hook:
*/

/*

var rentals = [{
  id: 1,
  title: 'Grand Old Mansion',
  owner: 'Veruca Salt',
  city: 'San Francisco',
  type: 'Estate',
  bedrooms: 25,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  id: 2,
  title: 'Urban Living',
  owner: 'Mike TV',
  city: 'Seattle',
  type: 'Condo',
  bedrooms: 20,
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
  id: 3,
  title: 'Downtown Charm',
  owner: 'Violet Beauregarde',
  city: 'Portland',
  type: 'Apartment',
  bedrooms: 15,
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

*/
export default Ember.Route.extend({
  model() {
    // The hard-coded data
    // return rentals;
    return this.store.findAll('rental');
  },

  open: function() {
    Ember.run.next(function() {
      Ember.$('#background').addClass('atIndex');
      Ember.$('.index').parents('.liquid-child').addClass('open');
    });
  }.on('activate')
});
