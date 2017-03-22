import React, { Component } from 'react';

class Auth extends Component {
  componentWillMount() {
    // var uiConfig = {
    //   signInSuccessUrl: '/',
    //   signInOptions: [
    //     // Leave the lines as is for the providers you want to offer your users.
    //     window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     window.firebase.auth.EmailAuthProvider.PROVIDER_ID
    //   ]
    // };
    var authUi = new window.firebaseui.auth.AuthUI(window.firebase.auth());
    authUi.start('#firebaseui-auth');
  }
  render() {
    return (
      <div className="Auth">
        This is Auth
        <div id="firebaseui-auth"></div>
      </div>
    );
  }
}

export default Auth;
