import { Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import JsonService from '../API/JsonService';

const MySelect = ({ changeUserId }) => {
	const [users, setUsers] = useState(null);

	const fetchUsers = async () => {
		const response = await JsonService.getAllUsers();
		return setUsers(response);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<Space wrap>
			<Select
				onChange={changeUserId}
				defaultValue="Select user"
				style={{
					width: 200,
				}}
				allowClear
				options={users}
			/>
		</Space>
	);
};

export default MySelect;
