import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import AddNewLomba from "./views/AddNewLomba";
import Beranda from "./views/Beranda";
import Verifikasi from "./views/Verifikasi";
import DetailPengajuan from "./views/DetailPengajuan";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/lomba/create",
    layout: DefaultLayout,
    component: AddNewLomba
  },
  {
    path: "/admin/verifikasi",
    layout: DefaultLayout,
    component: Verifikasi
  },
  {
    path: "/detailpengajuan",
    layout: DefaultLayout,
    component: DetailPengajuan
  },
  {
    path: "/beranda",
    layout: DefaultLayout,
    component: Beranda
  }
];
