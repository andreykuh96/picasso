import React from 'react';
import { Avatar, List } from 'antd';

const Commetns = ({ comment }) => {
	return (
		<>
			<List
				className="demo-loadmore-list"
				itemLayout="horizontal"
				dataSource={comment}
				renderItem={(item) => (
					<List.Item>
						<List.Item.Meta
							avatar={<Avatar />}
							title={
								<>
									<div>
										{item.id}. {item.name}
									</div>
									<div>{item.email}</div>
								</>
							}
							description={item.body}
						/>
					</List.Item>
				)}
			/>
		</>
	);
};

export default Commetns;
