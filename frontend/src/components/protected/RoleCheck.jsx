
const RoleCheck = ({ userRole, children }) => {
    if (userRole === 'restaurant')
        return children
}

export default RoleCheck