// <------- Arreglo de actividades sospechozas -----> modificar el valor de ser necesario
var actividadesSospechozas = [];

function agregarActividad(descripcion, nivelRiesgo) {
  /* TU CODIGO */
  if (!descripcion || !nivelRiesgo) {
    return "Descripcion o nivel de riesgo no valido";
  }
  if (
    nivelRiesgo !== "bajo" &&
    nivelRiesgo !== "medio" &&
    nivelRiesgo !== "alto"
  ) {
    return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
  }
  actividadesSospechozas.push(
    "Descripcion: " + descripcion + ", Riesgo- " + nivelRiesgo
  );
  return (
    "Actividad: " +
    descripcion +
    " con Nivel de riesgo: " +
    nivelRiesgo +
    " fue agregada con exito"
  );
}

function eliminarActividad(indice) {
  /* TU CODIGO */
  if (isNaN(indice)) return "El indice no es valido, debe ser un numero";
  if (indice < 0 || indice >= actividadesSospechozas.length) {
    return "El indice no es valido, se encuentra fuera del rango";
  }
  actividadesSospechozas.splice(indice, 1);
  return "Actividad eliminada con exito";
}

function filtrarActividadesPorRiesgo(nivelRiesgo) {
  /* TU CODIGO */
  if (!nivelRiesgo) {
    return "Nivel de riesgo no valido";
  }
  if (
    nivelRiesgo !== "bajo" &&
    nivelRiesgo !== "medio" &&
    nivelRiesgo !== "alto"
  ) {
    return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
  }

  let arrayNuevo = actividadesSospechozas.filter(function (actividad) {
    if (actividad.includes(nivelRiesgo)) return actividad;
  });
  if (arrayNuevo.length > 0) return arrayNuevo;
  return "No hay actividades con este nivel de riesgo";
}

function generarReporteDeActividades() {
  /* TU CODIGO */
  var arrayNuevo = actividadesSospechozas.map(function (actividad, indice) {
    return `Id: ${indice}, ${actividad}`;
  });
  if (arrayNuevo.length > 0) return arrayNuevo;
  return "No hay actividades para mostrar";
}

// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades,
};
