Meteor.methods({
  getUnknownPublicBadges: function() {
    var user = Meteor.user();
    var profile = user.profile || {};
    var userId = profile.backpackId;

    if (!userId) {
      return;
    }

    console.log('user', userId);
    var result = HTTP.get(BACKPACK_URL + '/displayer/' + userId + '/groups.json');

    if (result.statusCode !== 200)
      throw new Meteor.Error(500, 'error getting groups');

    var badges = new Meteor.Collection(null);

    result.data.groups.forEach(function(group) {
      console.log('group', group.groupId);
      var result = HTTP.get(BACKPACK_URL + '/displayer/' + userId + '/group/' + group.groupId + '.json');

      if (result.statusCode !== 200)
        throw new Meteor.Error(500, 'error getting group ' + group.groupId);

      result.data.badges.forEach(function(bpBadge) {
        var badge = bpBadge.assertion.badge;
        badge.cachedImage = bpBadge.imageUrl;
        var idParts = [
          badge.name, 
          badge.image, 
          badge.issuer.name, 
          badge.issuer.origin 
        ];
        var id = badge._id = CryptoJS.MD5(idParts.join('')).toString();
        console.log('adding', id, ':', badge);
        if (Badges.find(id).count() === 0)
          badges.upsert(id, badge);
      });
    });
    
    return badges.find().fetch();
  }
});
