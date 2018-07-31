document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app();
    var uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',  // que vuelva al home ( pagina de menubotones)
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
    // Terms of service url.
  tosUrl: '<your-tos-url>'  // ruta home ( terminos y condiciones)

};
firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
      console.log(user);
      document.getElementById('userData').innerHTML='Hola' + user.displayName +'<a href="#" onClick="firebase.auth().signOut()">Cerrar Sesion</a>';
    }else{
      document.getElementById('userData').innerHTML='';// para limpiar al deslogearse
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
    }
  });
} catch (e) {
    console.error(e);
  }
});