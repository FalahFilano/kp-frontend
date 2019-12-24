import { DefaultLayout } from '../layouts';
import Verifikasi from '../views/Verifikasi';
import DetailPengajuan from '../views/DetailPengajuan';

export default [
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
];