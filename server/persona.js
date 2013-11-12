/*  persona.js
      cut 'n pasted, bro: https://github.com/vladikoff/meteor-accounts-persona
*/

Accounts.onCreateUser(function(options, user) {
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

  console.log('creating user', user.username);
  return user;
});