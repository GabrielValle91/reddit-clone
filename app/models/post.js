import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  upvotes: DS.attr('number'),
  downvotes: DS.attr('number'),
  category: DS.attr('string')
});
