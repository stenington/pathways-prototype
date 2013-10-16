Template.home.created = function() {
  Meteor.call('getUnknownPublicBadges', function(err, badges) {
    if (err) return;
    Session.set('availableBadges', badges);
  });
};

Template.login.created = function() {
  Session.set('availableBadges', undefined);
};

Template.home.count = function() {
  var badges = Session.get('availableBadges');
  return badges ? badges.length : 0;
};

Template.home.events({
  'click .import': function(e) {
    e.preventDefault();
    Meteor.Router.to('/import');
  }
});

Template.home.allBadges = function () {
  return Badges.find().fetch();
};

Template.import.badges = function () {
  return Session.get('availableBadges');
};

Template.import.events({
  'click .import': function (e) {
    var badges = Session.get('availableBadges');
    badges.forEach(function(badge) {
      console.log('badge', badge._id, badge);
      Badges.upsert(badge._id, badge, function(err, result){ console.log('done', err, result);});
    });
  }
});
