//iniciar sesión para 3 tipos de usuarios recepción, administación y 
const login = ()=>{
    var uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',  // que vuelva al home ( pagina de menubotones)
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
          // Terms of service url.
        tosUrl: '<your-tos-url>'  // ruta home ( terminos y condiciones)
      
      };
      document.getElementById('userData').innerHTML='';// para limpiar al deslogearse
      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
}



