import { createContext } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const authContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleSignIn = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleLogin = () => {
		return signInWithPopup(auth, googleSignIn);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			if (currentUser && currentUser.email) {
				const loggedUser = {
					email: currentUser.email,
				};
				fetch('http://localhost:5000/jwt', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(loggedUser),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						localStorage.setItem('car-access', data.token);
					});
			} else {
				localStorage.removeItem('car-access');
			}
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const getInfo = {
		user,
		loading,
		createUser,
		signIn,
		logOut,
		googleLogin,
	};
	return (
		<authContext.Provider value={getInfo}>{children}</authContext.Provider>
	);
};

export default AuthProviders;
