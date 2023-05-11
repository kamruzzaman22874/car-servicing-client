import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Bookings from '../pages/Bookings/Bookings';
import BookService from '../pages/BookService/BookService';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
			{
				path: '/book/:id',
				element: <BookService></BookService>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`),
			},
			{
				path: '/bookings',
				element: (
					<PrivateRoute>
						<Bookings></Bookings>
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
