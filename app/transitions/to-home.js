import { stop } from "liquid-fire";
import Ember from "ember";

export default function fade() {
  var firstStep;
  var self = this;
  stop(self.oldElement);
  firstStep = function() {
    self.oldElement.removeClass('open');
    Ember.$('#background').removeClass('internal').addClass('atIndex');
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve();
      }, 1000);
    });
  };
  return firstStep();
}
