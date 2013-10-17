Meteor.Router.add({
  '/': 'main',
  '/pathway/:id': function (id) {
    Meteor.subscribe('pathway', id);
    return 'showPathway';
  }
});