import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../providers/AuthProviders';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(authContext);
	const location = useLocation()
	if (loading) {
		return <progress className='progress w-56'></progress>;
	}
	if (user?.email) {
		return children;
	}
	return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;
