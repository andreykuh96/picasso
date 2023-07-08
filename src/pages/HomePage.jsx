import React, { useState } from 'react';
import MySelect from '../components/MySelect';
import ListItem from '../components/ListItem';

const HomePage = ({ alert }) => {
	const [userId, setUserId] = useState(undefined);
	const [value, setValue] = useState('');

	const addComment = async (e) => {
		e.preventDefault();

		const newComment = {
			name: 'User',
			email: 'user@gmail.com',
			body: value,
		};

		try {
			if (value) {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/comments',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(newComment),
					}
				);

				const data = await response.json();
				console.log(data);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setValue('');
		}
	};

	const changeUserId = (id) => {
		setUserId(id);
	};

	return (
		<div className="home">
			<div className="container">
				<form onSubmit={addComment}>
					<input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						type="text"
					/>
					<button>add new comment</button>
				</form>
				<MySelect changeUserId={changeUserId} />
				<ListItem userId={userId} />
			</div>
		</div>
	);
};

export default HomePage;
