import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

const App = () => {
	const [alert, setAlert] = useState(false);

	const showAlert = () => {
		setAlert(true);
	};

	return (
		<Routes>
			<Route
				path="/"
				element={
					<HomePage
						alert={alert}
						setAlert={setAlert}
						showAlert={showAlert}
					/>
				}
			/>
			<Route
				path="/post/:id"
				element={<PostPage alert={alert} setAlert={setAlert} />}
			/>
			<Route path="*" element={<HomePage />} />
		</Routes>
	);
};

export default App;
