// Hack: turn off the dropdown feature automatically enabled by accounts-password

var dropdown = function () { return false; }
Template._loginButtonsLoggedOut.dropdown = dropdown;
Template._loginButtonsLoggedIn.dropdown = dropdown;
Template._loginButtonsLoggingInPadding.dropdown = dropdown;
