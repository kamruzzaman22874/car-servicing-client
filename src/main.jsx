import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProviders from './providers/AuthProviders';
import router from './Routes/Routes.jsx';
import '@smastrom/react-rating/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<div className='w-4/5 mx-auto'>
		<AuthProviders>
			<React.StrictMode>
				<RouterProvider router={router}></RouterProvider>
			</React.StrictMode>
		</AuthProviders>
	</div>
);
