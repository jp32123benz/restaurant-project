import React from 'react';
// import User from '../components/userpage/User';
import UserNavbarRoutes from '../components/userpage/UserNavbarRoutes'
import UserNavbar from '../components/DynamicNavbar'

function UserPage() {
    return (
        <>
            <UserNavbar routes={UserNavbarRoutes}  />
            {/* <User /> */}
        </>
    )
}

export default UserPage;
