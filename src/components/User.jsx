import React from 'react';
import { Descriptions } from 'antd';

const User = ({ name, email, phone, website }) => {
	return (
		<Descriptions column={1} size="small" title="User Info">
			<Descriptions.Item label="Name">{name}</Descriptions.Item>
			<Descriptions.Item label="Email">{email}</Descriptions.Item>
			<Descriptions.Item label="Phone">{phone}</Descriptions.Item>
			<Descriptions.Item label="Website">{website}</Descriptions.Item>
		</Descriptions>
	);
};

export default User;
