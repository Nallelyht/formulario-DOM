function translate() {
  var title = document.getElementById('form-signin-heading');
  var email = document.getElementById('inputEmail');
  var password = document.getElementById('inputPassword');
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}
translate ();

function mostarDatos(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var titulo = document.getElementById("titulo");
  var datos = document.getElementById("datosFormulario");
  titulo.innerHTML = "Datos de  Formulario";
  datos.innerHTML = "El correo ingresado es: </br>" + email + "</br> La clave que ingresada es: </br>"+ password;
}
