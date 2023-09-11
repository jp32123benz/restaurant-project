import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './restaurantpage/restaurant.css';
import {
    FaHome,
    FaHamburger,
    FaBars,
    FaPlusCircle,
    FaAddressBook,
    FaShoppingCart,
    FaUserAlt,
    FaSignOutAlt,
} from 'react-icons/fa';
import { useState } from 'react';

const RestaurantNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        {
            path: '/dashboard',
            name: 'Home',
            icon: <FaHome />,
        },
        {
            path: '/dashboard/create-food',
            name: 'Add Food',
            icon: <FaPlusCircle />,
        },
        {
            path: '/dashboard/food-list',
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

    const handleLogOut = () => {
        localStorage.clear()
        window.location.href = '/';
    }
    return (
        <>
            <motion.div
                animate={{ width: isOpen ? '300px' : '50px' }}
                className={`motionSidebar ${isOpen ? 'open' : 'closed'}`}
            >
                <section className="routes">
                    <div className="top_section">
                        <h1 className="DashLogo" style={{ display: isOpen ? 'block' : 'none' }}>Yummy</h1>
                        <div className="bars" onClick={() => setIsOpen(!isOpen)}>
                            <FaBars />
                        </div>
                    </div>
                    <div className="routes">
                        {routes.map((route, ind) => (
                            <Link to={route.path} key={ind} className="link">
                                <div className="icons">{route.icon}</div>
                                {isOpen && <div className="link_text">{route.name}</div>}
                            </Link>
                        ))}
                        <Link className="link" onClick={handleLogOut}>
                            <div className="icons"><FaSignOutAlt /></div>
                            {isOpen && <div className="link_text">Log Out</div>}
                        </Link>
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default RestaurantNavbar;
