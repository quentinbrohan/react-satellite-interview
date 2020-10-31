import Icon from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as SatelliteSvg } from '../assets/svg/satellite.svg';
import { ISatelliteData } from '../interfaces';
import { RootState } from '../reducers';

const { SubMenu } = Menu;

const MenuSatellites: React.FC = () => {
	const { satellites } = useSelector((state: RootState | any) => state.satellites);

	return (
		<Menu
			mode="inline"
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			style={{ height: '100%', borderRight: 0 }}
		>
			<SubMenu
				key="sub1"
				icon={<Icon component={SatelliteSvg} height="2rem" />}
				title="Added satellites"
			>
				{satellites.map((satellite: ISatelliteData) => (
					<Menu.Item key={satellite.OBJECT_ID}>
						<span>{satellite.OBJECT_NAME}</span>
						<Link to={`/CATNR/${satellite.NORAD_CAT_ID}`} />
					</Menu.Item>
				))}
			</SubMenu>
		</Menu>
	);
};

export default MenuSatellites;
