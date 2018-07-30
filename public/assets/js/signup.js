//iniciar sesión para 3 tipos de usuarios recepción, administación y oficinas
const login = () => {
  var uiConfig = {
    // que vuelva al home (pagina de menubotones)
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
   ],
   // Terms of service url.
   tosUrl: '<your-tos-url>'// ruta home ( terminos y condiciones)
  };
  
      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
}