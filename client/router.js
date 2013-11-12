/*  router.js:
      main is the main app
      showPathway shows a saved pathway for sharing (incomplete)
*/

Meteor.Router.add({
  '/': 'main',
  '/pathway/:id': function (id) {
    Meteor.subscribe('pathway', id);
    return 'showPathway';
  }
});