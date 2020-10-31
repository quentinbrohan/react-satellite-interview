import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Typography, Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { INote, IRouteParams, ISatelliteInfo, IState } from '../../../interfaces';
import { loadSatellite } from '../satellitesSlice';
import './satelliteInfo.less';
import TableData from './TableData';
import Note from '../../notes/Note/Note';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Title } = Typography;

const SatelliteInfo: React.FC<ISatelliteInfo> = () => {
	const { id } = useParams<IRouteParams>();
	const dispatch = useDispatch();
	const { satellite, loading } = useSelector((state: IState) => state.satellites);
	const { notes, content } = useSelector((state: IState) => state.notes);
	const note = notes.filter((note: INote) => note.id === parseInt(id));

	useEffect(() => {
		dispatch(loadSatellite(parseInt(id)));
	}, [dispatch, id, satellite, note, content]);

	if (satellite) {
		return (
			<div className="satellite-info-container">
				<Title>
					<span className="title-prefix">Name:</span> {satellite.OBJECT_NAME}
				</Title>

				<TableData {...satellite} />

				<Note
					content={note.length > 0 ? note[0].content : content}
					id={satellite.NORAD_CAT_ID}
				/>
			</div>
		);
	}

	if (!satellite && !loading) {
		return (
			<div className="not-found-satellite">
				<Title>Oops, there is nothing here !</Title>
				<p>You first need to add a satellite to the list.</p>
				<Link to="/">
					<Button>Home</Button>
				</Link>
			</div>
		);
	}
	return (
		<div className="loading-satellite">
			<Spin indicator={antIcon} />
		</div>
	);
};

export default SatelliteInfo;
