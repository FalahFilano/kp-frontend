import SessionManager, { Role } from "../utils/session";

export default function() {
  let role = SessionManager.getUserRole();

  if (role === Role.admin) {
    return [
      {
        title: "Verifikasi",
        htmlBefore: '<i class="material-icons">verified_user</i>',
        to: "/admin/verifikasi",
      },
    ];
  } else if (role === Role.mahasiswa) {
    return [
      {
        title: "Beranda",
        htmlBefore: '<i class="material-icons">home</i>',
        to: "/beranda",
      },
      {
        title: "Tambah Sertifikat Lomba",
        htmlBefore: '<i class="fas fa-trophy"></i>',
        to: "/lomba/create",
      }
    ];
  }

}
