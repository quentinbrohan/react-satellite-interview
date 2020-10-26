import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Typography, Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { IRouteParams, ISatelliteInfo, IState } from '../../interfaces';
import { loadSatellite } from '../satellitesSlice';
import './satelliteInfo.less';
import TableData from './TableData';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Title } = Typography;

const SatelliteInfo: React.FC<ISatelliteInfo> = () => {
	const { id } = useParams<IRouteParams>();
	const dispatch = useDispatch();
	const { satellite } = useSelector((state: IState) => state.satellites);

	useEffect(() => {
		dispatch(loadSatellite(id));
	}, [dispatch, id, satellite]);

	if (satellite) {
		return (
			<div className="satellite-info-container">
				<Title>
					<span className="title-prefix">Name:</span> {satellite.OBJECT_NAME}
				</Title>

				<TableData {...satellite} />
			</div>
		);
	}

	if (!satellite) {
		return (
			<div>
				<Title level={4}>Oups, Nothing here !</Title>
				<p>You first need to add a satellite to the list.</p>
				<Link to="/">
					<Button>Home</Button>
				</Link>
			</div>
		);
	}
	return <Spin indicator={antIcon} />;
};

export default SatelliteInfo;
