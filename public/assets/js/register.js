//regista las visitas
const name = name.value;
const lastName = lastName.value;
const rut = rut.value;

window.register = ()=>{
  //variable con ruta agregar nuevo registro
  let newRegister = firebase
  .database()
  .ref()
  .child("register")
  .push().key;
  //Aquí se muestra el contenido de cada registro
  firebase
  .database()
  .ref(`register/${newRegister} `)
  .set({
    name: name,
    lastName: lastName,
    rut: rut
  });
}

// En esta constante se imprimen los nuevos registro en html
const printRegister = register =>{

}