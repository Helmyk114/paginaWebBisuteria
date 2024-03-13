import Swal from "sweetalert2";

//Notificación que muestra que un evento se logro con exito
export function notificacionConfirmar({ icono, titulo }) {
  Swal.fire({
    icon: icono,
    title: titulo,
    showConfirmButton: false,
    timer: 1500,
  });
};

//Notificación que muestra que un evento no se logro con exito
export function notificacionError({ icono, titulo}) {
  Swal.fire({
    icon: icono,
    title: titulo,
    showConfirmButton: false,
    timer: 1500,
  });
};

//Notificacion para confirmar el cambio de estado
export function notificacionActivarInactivar({ titulo, boton }) {
  return Swal.fire({
    title: titulo,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#6977E4",
    cancelButtonColor: "#d33",
    confirmButtonText: boton
  });
};

export function notificacionInformativa({ icono, titulo }) {
  Swal.fire({
    title: titulo,
    icon: icono
  });
};