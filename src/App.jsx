import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loader from './pages/Loader';
import Character from './pages/Character';
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/character/:id'} element={<Character />} />
				<Route path={'*'} element={<Loader />} />
			</Routes>
		</Router>
	);
};

export default App;
