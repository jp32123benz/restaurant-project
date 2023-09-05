import React, { useState } from 'react'
import Header from '../dashboard/admin/Header'
import Aside from '../dashboard/admin/Aside'

const DashLayout = ({ children }) => {
    const [adjustSidebar, setAdjustSidebar] = useState(false)

    const handleSidebar = () => {
        setAdjustSidebar(!adjustSidebar)
    }
    return (
        <>
            <Header Sidebar={handleSidebar} />
            <Aside asideHide={adjustSidebar} />
            <div className="childrenManage">
                {children}
            </div>
        </>
    )
}

export default DashLayout