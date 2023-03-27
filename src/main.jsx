import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './style/index.scss';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="1092574242810-187sgg9c6sr45daufij2om4uek6trc00.apps.googleusercontent.com">
			<App />,
		</GoogleOAuthProvider>
	</React.StrictMode>,
);
