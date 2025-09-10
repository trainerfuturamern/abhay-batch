import { Navigate } from "react-router-dom";

const ProtectedRoute = ({requiredRole, children})=>{ //['admin']

    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
    const user = JSON.parse(localStorage.getItem('user')) || null;

    if(!isAuthenticated){
        return <Navigate to={'/login'} />
    }

    if(requiredRole && !requiredRole.includes(user?.role)){
        return <Navigate to={'/unauthorized'} />
    }

    return children;


}

export default ProtectedRoute;