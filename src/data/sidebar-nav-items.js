export default function() {
  return [
    {
      title: "Beranda",
      htmlBefore: '<i class="material-icons">home</i>',
      to: "/beranda",
    },
    {
      title: "Verifikasi",
      htmlBefore: '<i class="material-icons">verified_user</i>',
      to: "/admin/verifikasi",
    },
    {
      title: "Tambah Sertifikat Lomba",
      htmlBefore: '<i class="fas fa-trophy"></i>',
      to: "/lomba/create",
    }
  ];
}
