import { DefaultLayout } from '../layouts';
import Beranda from '../views/Beranda';
import AddNewLomba from '../views/AddNewLomba';

export default [
    {
        path: "/beranda",
        layout: DefaultLayout,
        component: Beranda
    },
    {
        path: "/lomba/create",
        layout: DefaultLayout,
        component: AddNewLomba
    },
];