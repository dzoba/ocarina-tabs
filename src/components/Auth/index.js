import React, { Component } from 'react';

class Auth extends Component {
  componentDidMount() {
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        window.firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    var authUi = new window.firebaseui.auth.AuthUI(window.firebase.auth());
    authUi.start('#firebaseui-auth', uiConfig);
  }
  render() {
    return (
      <div className="Auth">
        <div id="firebaseui-auth"></div>
      </div>
    );
  }
}

export default Auth;
