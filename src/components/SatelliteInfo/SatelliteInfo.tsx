import { Typography } from 'antd';
import React, { useEffect, useState } from 'react';

// Mock Data from fetch
// https://celestrak.com/NORAD/elements/gp.php?FORMAT=json&CATNR=25544
import mockSatellite from '../../data/mockSatellite.json';

import './satelliteInfo.less';
import TableData from './TableData';

const { Title } = Typography;

const SatelliteInfo: React.FC = () => {
	const [data, setData] = useState<null | any>(null);

	useEffect(() => {
		setData(mockSatellite);
	}, [data]);
	console.log('data: ', data);

	if (data) {
		return (
			<div className="satellite-info-container">
				<Title>
					<span className="title-prefix">Name:</span> {data.OBJECT_NAME}
				</Title>

				<TableData {...data} />
			</div>
		);
	}

	return <div>SatelliteInfo</div>;
};

export default SatelliteInfo;
