/*  collections.js:
      Badges are badge classes
      Pathways are the things this app lets you build
      Placements are Badges placed in a Pathway
*/

Badges = new Meteor.Collection('badges');
Pathways = new Meteor.Collection('pathways');
Placements = new Meteor.Collection('placements');

Meteor.startup(function () {
  if (Meteor.isServer) {
    if (Badges.find().count() === 0) {
      // You could load dummy data here, or see server/demo.js
    }
  }
});

