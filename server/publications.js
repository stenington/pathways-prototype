/*  publications.js:
      I'm not sure I fully get publications yet.
*/

Meteor.publish('user-data', function (userId) {
  if (userId) {
    var username = Meteor.users.findOne(userId).username;
    var pathwayId;
    if (Pathways.find({owner: username}).count() === 0)
      pathwayId = Pathways.insert({owner: username});
    else
      pathwayId = Pathways.findOne({owner: username})._id;
    return [
      Pathways.find({owner: username}),
      Placements.find({pathway: pathwayId}),
      Badges.find({owner: username})
    ];
  }
});

Meteor.publish('pathway', function (id) {
  return [
    Pathways.find(id),
    Placements.find({pathway: id})
  ];
});