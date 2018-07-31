//iniciar sesión para 3 tipos de usuarios recepción, administación y oficinas
const login = () => {
  let uiConfig = {
    // que vuelva al home (pagina de menubotones)
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    tosUrl: '<your-tos-url>'// ruta home ( terminos y condiciones)Terms of service url.
  };
  // Initialize the FirebaseUI Widget using Firebase.
  let ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);
}

const signOut = () => {
  firebase.auth().signOut()
}
