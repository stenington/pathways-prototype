Badges = new Meteor.Collection('badges');
Pathways = new Meteor.Collection('pathways');
Placements = new Meteor.Collection('placements');

Meteor.startup(function () {
  if (Meteor.isServer) {
    if (Badges.find().count() === 0) {
      Badges.insert({name: 'A'});
      Badges.insert({name: 'B'});
      Badges.insert({name: 'C'});
      Badges.insert({name: 'D'});
    }
  }
});

