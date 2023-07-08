import React from 'react';
import { List } from 'antd';

const UserPost = ({ post }) => {
	return (
		<List
			itemLayout="horizontal"
			dataSource={[post]}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta
						title={
							<a href="https://ant.design">
								{item.id}. {item.title}
							</a>
						}
						description={item.body}
					/>
				</List.Item>
			)}
		/>
	);
};

export default UserPost;
