import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { IAppLayout } from '../interfaces';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
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
				<Sider width={200} className="site-layout-background">
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%', borderRight: 0 }}
					>
						<SubMenu key="sub1" icon={<RocketOutlined />} title="Added satellites">
							<Menu.Item key="1">
								<span>SatName</span>
								<Link to="/CATNR/1" />
							</Menu.Item>
						</SubMenu>
					</Menu>
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
