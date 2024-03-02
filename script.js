document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
  
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var numero = document.getElementById('contraseña').value;
  
    // Mostrar un mensaje de confirmación
    alert('¡Formulario enviado con éxito!');
  
    // Limpiar los campos del formulario después de enviarlo
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('contraseña').value = '';
  });
  