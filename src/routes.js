import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import AddNewLomba from "./views/AddNewLomba";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/login",
    layout: () => <Login />
  },
  {
    path: "/register",
    layout: () => <Register />
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
