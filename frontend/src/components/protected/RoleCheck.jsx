
const RoleCheck = ({ userRole, children }) => {
    console.log(userRole);
    if (userRole === 'restaurant')
        return children
}

export default RoleCheck