import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JsonService from '../API/JsonService';
import calcUserByPost from '../utils/userById';
import User from '../components/User';
import UserPost from '../components/UserPost';
import Comments from '../components/Comments';
import Portal from '../components/Portal';

const PostPage = ({ alert, setAlert }) => {
	const { id } = useParams();
	const [user, setUser] = useState([]);
	const [post, setPost] = useState([]);
	const [comment, setComment] = useState([]);

	useEffect(() => {
		setAlert(true);

		const timer = setTimeout(() => {
			setAlert(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, [setAlert]);

	const fetchUserById = async (id) => {
		const res = await JsonService.getUserById(calcUserByPost(id));
		return setUser(res);
	};

	const fetchPostById = async (id) => {
		const res = await JsonService.getPostById(id);
		return setPost(res);
	};

	const fetcCommentsById = async (id) => {
		const res = await JsonService.getCommentById(id);
		return setComment(res);
	};

	useEffect(() => {
		fetchUserById(id);
		fetchPostById(id);
		fetcCommentsById(id);
	}, [id]);

	return (
		<div>
			<div className="container">
				<User
					name={user.name}
					email={user.email}
					phone={user.phone}
					website={user.website}
				/>
				<UserPost post={post} />
				<Comments comment={comment} />
			</div>
			{alert ? (
				<Portal>
					<div
						style={{
							backgroundColor: '#999',
							padding: '20px',
							position: 'absolute',
							top: '0',
							right: '0',
						}}
					>
						ALERT
					</div>
				</Portal>
			) : null}
		</div>
	);
};

export default PostPage;
