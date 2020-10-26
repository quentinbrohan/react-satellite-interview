import { RocketOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { IAppLayout, ISatelliteData } from '../interfaces';
import { RootState } from '../reducers';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const AppLayout: React.FC<IAppLayout> = ({ children }: IAppLayout) => {
	const { satellites } = useSelector((state: RootState | any) => state.satellites);

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
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%', borderRight: 0 }}
					>
						<SubMenu key="sub1" icon={<RocketOutlined />} title="Added satellites">
							{satellites.map((satellite: ISatelliteData) => (
								<Menu.Item key={satellite.OBJECT_ID}>
									<span>{satellite.OBJECT_NAME}</span>
									<Link to={`/CATNR/${satellite.NORAD_CAT_ID}`} />
								</Menu.Item>
							))}
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
