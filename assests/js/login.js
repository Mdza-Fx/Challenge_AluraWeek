document.addEventListener("DOMContentLoaded", function() {
    const usuarioInput = document.getElementById("usuario");
    const contraseñaInput = document.getElementById("contraseña");
  
    // Detectar la tecla Enter
    usuarioInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        redirigir();
      }
    });
  
    contraseñaInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        redirigir();
      }
    });
  
    // Función para redirigir
    function redirigir() {
      const usuario = usuarioInput.value;
      const contraseña = contraseñaInput.value;
  
      // Verificar credenciales
      if (usuario === "admin" && contraseña === "admin") {
        setTimeout(function() {
          window.location.href = "usuario.html";
        }, 1000);
      } else {
        alert("Credenciales incorrectas");
      }
    }
  });
  