import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../providers/AuthProviders';

const SocialIcons = () => {
	const { googleLogin } = useContext(authContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const handleGoogleSignIn = () => {
		googleLogin()
			.then((result) => {
				console.log(result);
				navigate(from, { replace: true });
			})
			.catch((err) => console.error(err));
	};
	return (
		<div className='flex flex-col w-full border-opacity-50'>
			<div className='divider'>OR</div>
			<div className='text-center'>
				<button
					onClick={handleGoogleSignIn}
					className='btn btn-circle btn-outline'>
					G
				</button>
			</div>
		</div>
	);
};

export default SocialIcons;
