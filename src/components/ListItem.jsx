import React, { useEffect, useState } from 'react';
import { Divider, List, Typography } from 'antd';
import JsonService from '../API/JsonService';
import { Link } from 'react-router-dom';

const ListItem = ({ userId }) => {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		if (userId) {
			const res = await JsonService.getPostsByUserId(userId);
			return setPosts(res);
		} else {
			const res = await JsonService.getAllPosts();
			return setPosts(res);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, [userId]);

	return (
		<>
			<Divider orientation="left">Posts</Divider>
			<List
				bordered
				dataSource={posts.map((post) => post)}
				renderItem={(item) => (
					<List.Item>
						<Typography.Text mark>{item.id}</Typography.Text>{' '}
						{<Link to={`post/${item.id}`}>{item.title}</Link>}
					</List.Item>
				)}
			/>
		</>
	);
};

export default ListItem;
