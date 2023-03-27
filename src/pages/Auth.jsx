import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
const Auth = ({ setIsLogged }) => {
	const login = useGoogleLogin({
		onSuccess: async (response) => {
			try {
				const details = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
					headers: {
						Authorization: `Bearer ${response.access_token}`,
					},
				});
				setIsLogged((prev) => !prev);
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
		<div className="auth">
			<button onClick={login}>
				<i>Continue with google</i>
			</button>
		</div>
	);
};

export default Auth;
