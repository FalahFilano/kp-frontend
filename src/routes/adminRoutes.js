import { DefaultLayout } from '../layouts';
import Verifikasi from '../views/Verifikasi';
import DetailPengajuan from '../views/DetailPengajuan';

export default [
    {
        path: "/admin/verifikasi",
        exact: true,
        layout: DefaultLayout,
        component: Verifikasi
    },
    {
        path: "/admin/verifikasi/:id",
        layout: DefaultLayout,
        component: DetailPengajuan
    },
];