document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Validar los campos del formulario
    var nombreApellido = document.getElementById("nombreapellido").value;
    var correoElectronico = document.getElementById("correoelectronico").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Validar que los campos no estén vacíos
    if (
      nombreApellido === "" ||
      correoElectronico === "" ||
      telefono === "" ||
      mensaje === ""
    ) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
  
    // Validar formato del correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correoElectronico)) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }
  
    // Validar formato del número de teléfono
    var phonePattern = /^\(\d{2}\)\s\d{4}\s\d{4}$/;
    if (!phonePattern.test(telefono)) {
      alert("Ingrese un número de teléfono válido. Formato: (XX) XXXX XXXX");
      return;
    }
  
    // Si todos los campos son válidos, se puede enviar el formulario
    alert("Formulario enviado correctamente!");
    event.target.submit();
  });
  