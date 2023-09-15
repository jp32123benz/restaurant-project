import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './restaurantpage/restaurant.css';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';

const RestaurantNavbar = ({ routes }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogOut = () => {
        localStorage.clear()
        window.location.href = '/';
    }
    if (!routes) {
        return
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
                            <FaBars className='text-cursor' />
                        </div>
                    </div>
                    <div className="routes">
                        {routes.map((route, ind) => (
                            <Link to={route.path} key={ind} className="link" onClick={() => { setIsOpen(false); }}>
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
