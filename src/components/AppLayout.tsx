import { Button, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { IAppLayout } from '../interfaces';
import MenuSatellites from './MenuSatellites';

const { Header, Content, Sider } = Layout;

export const AppLayout: React.FC<IAppLayout> = ({ children }: IAppLayout) => {
	return (
		<Layout style={{ minHeight: '100vh', overflow: 'auto' }}>
			<Header className="header">
				<Button type="text">
					<Link to="/">Satellite</Link>
				</Button>
			</Header>
			<Layout>
				<Sider
					width={200}
					className="site-layout-background"
					breakpoint="lg"
					collapsedWidth={0}
					onBreakpoint={(broken) => {
						// console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						// console.log(collapsed, type);
					}}
				>
					<MenuSatellites />
				</Sider>
				<Layout style={{ padding: '0 24px 24px' }}>
					<Content
						className="site-layout-background"
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
						{children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
