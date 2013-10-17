Meteor.methods({
  loadPublicBadges: function() {
    var user = Meteor.user();
    var profile = user.profile || {};
    var userId = profile.backpackId;

    if (!userId) {
      return;
    }

    var result;
    try {
      result = HTTP.get(BACKPACK_URL + '/displayer/' + userId + '/groups.json');
    }
    catch (ex) {
      return;
    }

    if (result.statusCode !== 200)
      throw new Meteor.Error(502, 'error getting groups');

    result.data.groups.forEach(function(group) {
      var result = HTTP.get(BACKPACK_URL + '/displayer/' + userId + '/group/' + group.groupId + '.json');

      if (result.statusCode !== 200)
        throw new Meteor.Error(502, 'error getting group ' + group.groupId);

      result.data.badges.forEach(function(bpBadge) {
        var badge = bpBadge.assertion.badge;
        badge.cachedImage = bpBadge.imageUrl;
        var idParts = [
          user.username,
          badge.name, 
          badge.image, 
          badge.issuer.name, 
          badge.issuer.origin 
        ];
        var id = badge._id = CryptoJS.MD5(idParts.join('')).toString();
        badge.owner = user.username;
        Badges.upsert(id, badge);
      });
    });
  }
});
