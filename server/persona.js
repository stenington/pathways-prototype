Accounts.onCreateUser(function(options, user) {
  var email = user.services.persona.email;

  user.username = email;
  user.profile = {};

  var result = HTTP.post(BACKPACK_URL + '/displayer/convert/email', {
    data: { 
      email: email
    }
  });
  if (result.statusCode === 200 && result.data.status === 'okay')
    user.profile.backpackId = result.data.userId;

  console.log('creating user', user.username);
  return user;
});