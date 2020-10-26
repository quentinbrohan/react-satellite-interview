import React from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

import './notFoundPage.less';

const { Title } = Typography;

const NotFoundPage: React.FC = () => {
	return (
		<main className="not-found-page">
			<Title className="error-name">404: Page Not Found</Title>
			<p>Oops, there is nothing here. The page may have been moved or deleted.</p>
			<Link to="/">
				<Button>Home</Button>
			</Link>
		</main>
	);
};

export default NotFoundPage;
