import {
    FaHome,
    // FaHamburger,
    // FaPlusCircle,
    // FaAddressBook,
    // FaShoppingCart,
    FaUserAlt,
} from 'react-icons/fa';

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <FaHome />,
    },
    {
        path: '/dashboard/create-staff',
        name: 'Profile',
        icon: <FaUserAlt />,
    },
];

export default routes