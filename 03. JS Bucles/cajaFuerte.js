function cajaFuerte(codigoSecreto, cantidadIntentos) {
  /* TU CODIGO */
  if (!codigoSecreto || codigoSecreto.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }
  for (let i = 0; i < codigoSecreto.length; i++) {
    let char = codigoSecreto[i];
    if (!Number(char) || Number(char) === 0) {
      return "El codigo secreto solo puede estar conformado por numeros";
    }
    continue;
  }
  if (validarNumerosRepetidos(codigoSecreto)) {
    return "el codigo no puede tener numeros repetidos";
  }
  if (!cantidadIntentos || cantidadIntentos < 1 || cantidadIntentos > 5) {
    return "Solo se permite una cantidad de intentos mayor a 0 y menor a 6";
  }
  return codigoSecreto.toString() + cantidadIntentos.toString();
}

function validarNumerosRepetidos(codigo) {
  /* TU CODIGO */
  for (let i = 0; i < codigo.length - 1; i++) {
    for (let j = i + 1; j < codigo.length; j++) {
      if (codigo[i] === codigo[j]) {
        return true;
      }
    }
  }
  return false;
}
function SoloValidarNumeros(codigo) {
  for (let i = 0; i < codigo.length; i++) {
    let char = codigo[i];
    if (!Number(char) || Number(char) === 0) {
      return "El codigo secreto solo puede estar conformado por numeros";
    }
  }
}

// <------- Contador de intentos -----> no modific
var contadorIntentos = 1;

function desbloquearCajaFuerte(
  codigoSecreto,
  cantidadIntentos,
  codigoDesbloqueo
) {
  /* TU CODIGO */
  if (codigoDesbloqueo.length != 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }
  for (let i = 0; i < codigoDesbloqueo.length; i++) {
    if (isNaN(codigoDesbloqueo[i]))
      return "El codigo de desbloqueo solo puede estar conformado por numeros";
  }
  if (validarNumerosRepetidos(codigoDesbloqueo)) {
    return "el codigo no puede tener numeros repetidos";
  }
  if (codigoDesbloqueo === codigoSecreto) {
    return "Acceso concedido despues de :" + contadorIntentos + " intentos";
  } else {
    switch (true) {
      case codigoDesbloqueo % 2 === 0:
        console.log("codigo divisible por 2");
        break;
      case codigoDesbloqueo > codigoSecreto:
        console.log("codigo demasiado alto");
        break;
      default:
        console.log("Codigo incorrecto");
        break;
    }
  }

  contadorIntentos++;
  if (contadorIntentos > cantidadIntentos) {
    return "Acceso denegado. Se agotaron los intentos";
  }
}

// <------- NO TOCAR -------->
module.exports = { cajaFuerte, desbloquearCajaFuerte, validarNumerosRepetidos };
