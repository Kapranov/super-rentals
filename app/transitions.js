// toLeft, toRight, toUp, toDown, crossFade, fade
// {{#liquid-outlet}} Transitions between routes.
// {{#liquid-with}} Transitions between models or contexts within a single route.
// {{#liquid-bind}} Updates to simple bound values.
// {{#liquid-if}} Switching between true and false branches in an #if statement.
// {{#liquid-spacer}} Provides a smoothly growing/shrinking container that animates whenever its contained DOM mutates.

export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('crossFade', {duration: 4000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('index'),
    this.use('crossFade', {duration: 4000})
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('contact'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('dashboard'),
    this.use('fade', {duration: 3000}),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('dashboard'),
    this.toRoute('index'),
    this.use('fade'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('home'),
    this.use('toHome')
  );
  this.transition(
    this.fromRoute('home'),
    this.toRoute('index'),
    this.use('toDown')
  );
}
