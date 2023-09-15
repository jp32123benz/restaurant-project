import {
    FaHome,
    FaHamburger,
    FaPlusCircle,
    FaAddressBook,
    FaShoppingCart,
    FaUserAlt,
} from 'react-icons/fa';

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <FaHome />,
    },
    {
        path: '/dashboard/create-food',
        name: 'Add Food',
        icon: <FaPlusCircle />,
    },
    {
        path: '/dashboard/inventory',
        name: 'Food List',
        icon: <FaHamburger />,
    },
    {
        path: '/dashboard/order',
        name: 'Order',
        icon: <FaShoppingCart />,
    },
    {
        path: '/dashboard/create-staff',
        name: 'Add Staff',
        icon: <FaUserAlt />,
    },
    {
        path: '/dashboard/staff-list',
        name: 'Staff List',
        icon: <FaAddressBook />,
    },
];

export default routes