/*  accounts.js
      partially cut 'n pasted from https://github.com/vladikoff/meteor-accounts-persona
      hacked to load backpack ids and allow demo accounts
*/

Accounts.onCreateUser(function(options, user) {
  console.log('Begin creating user');
  if (user.services.persona) {
    var email = user.services.persona.email;

    user.username = email;
    user.profile = {};

    try {
      var result = HTTP.post(BACKPACK_URL + '/displayer/convert/email', {
        data: { 
          email: email
        }
      });
      if (result.data.status === 'okay')
        user.profile.backpackId = result.data.userId;
    }
    catch (ex) {
      console.log('nope', ex.toString());
    }
  }
  else {
    user.profile = user.profile || {};
    user.profile.backpackId = 'DEMO';
    user.profile.anon = 'anon'; // for auto-cleanup
    Meteor.call('giveDemoBadges', user.username);
  }

  console.log('creating user', user.username);
  return user;
});

function cleanup () {
  var removed = Accounts.removeOldGuests(before);
  console.log('clearing', removed, 'old guest accounts');
}

Meteor.startup(function () {
  Meteor.setInterval(cleanup, 1000*60*60); // clean hourly
});