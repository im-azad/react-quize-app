import { createContext, useContext, useEffect, useState } from 'react';
import '../firebase';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	onAuthStateChanged,
} from 'firebase/auth';

const AuthContext = createContext();

// Custom Hooks
export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();

	// get auth
	const auth = getAuth();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	// signup function
	async function signup(email, password, username) {
		await createUserWithEmailAndPassword(auth, email, password);

		// update profile
		const user = auth.currentUser;
		await updateProfile(user, {
			displayName: username,
		});
		setCurrentUser({ ...user });
	}

	// login function
	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}
	// logout function
	function logout() {
		return signOut(auth);
	}
	// pass value on context api
	const value = {
		currentUser,
		signup,
		login,
		logout,
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
