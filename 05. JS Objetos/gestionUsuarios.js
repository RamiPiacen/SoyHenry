// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js");

var asistente = {
  verPerfiles: function (opcion) {
    /* TU CODIGO */
    if (opcion === "todo") return perfiles;
    if (opcion === "nombre") {
      let arrayUsuarios = perfiles.map(function (user) {
        return user.usuario;
      });
      return arrayUsuarios;
    }
    if (opcion === "codigo" || opcion === "antiguedad")
      return perfiles.map((perfil) => perfil[opcion]);
    if (opcion === "nivel")
      return perfiles.map((perfil) => perfil.nivel_de_autorizacion);
  },
  verPerfilesPorAntiguedad: function () {
    /* TU CODIGO */
    let nuevoArray = [...perfiles]
    return nuevoArray.sort((a, b) => b.antiguedad - a.antiguedad) 
  },

  verAdministradores: function () {
    /* TU CODIGO */

    return perfiles.filter((ele) => {
      if (ele.nivel_de_autorizacion === "admin") return ele;
    });
  },

  modificarAcceso: function (usuario, codigo) {
    /* TU CODIGO */

    let usuarioEncontrado = perfiles.find((ele) => {
      if (ele.usuario === usuario) return ele;
    });
    console.log(usuarioEncontrado);
    if (!usuarioEncontrado) return "usuario no encontrado";
    if (codigo.length < 4 || isNaN(codigo))
      return "codigo de acceso invalido, debe contener solo 4 numeros";
    usuarioEncontrado.codigo = codigo;
    return "codigo de acceso modificado";
  },
};

// <----- NO TOCAR ------->
module.exports = {
  asistente,
};
