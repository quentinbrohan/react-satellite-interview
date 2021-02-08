import { Alert, Button, Input, InputNumber, Space, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSatelliteByNo,
	handleChangeSearch,
	resetSearchError,
} from '../../features/satellites/satellitesSlice';
import { IState } from '../../interfaces';
import './searchBar.less';

const { Title } = Typography;

const DEFAULT_SATELLITES = [
	{
		name: 'ATLAS CENTAUR 2',
		NORAD: '00694',
	},
	{
		name: 'ISS (ZARYA)',
		NORAD: '25544',
	},
	{
		name: 'SOYUZ-MS 17',
		NORAD: '46613',
	},
	{
		name: 'CREW DRAGON 1',
		NORAD: '46920',
	},
];

export const SearchBar: React.FC = () => {
	const dispatch = useDispatch();
	const { search, loading, searchError } = useSelector((state: IState) => state.satellites);

	const onChange = (value: string | number | undefined | any) => {
		dispatch(handleChangeSearch(value));
	};

	const handleSatelliteSearch = (norad?: string) => {
		dispatch(getSatelliteByNo(norad));
	};

	return (
		<div className="searchbar-container">
			<Title>
				Track satellites currently orbitting arround Earth using{' '}
				<a href="https://celestrak.com/NORAD/elements/" target="blank">
					Celestrak
				</a>
				's API.
			</Title>
			<Input.Group style={{ margin: '0 auto 2rem' }}>
				<p>
					Enter Satellite Catalog Number (NORAD) [5 digit number] to add its informations
					to your list.
				</p>
				<div className="searchbar">
					<InputNumber
						type="number"
						min={10000}
						max={46670}
						value={search}
						placeholder="NORAD"
						onChange={onChange}
						onPressEnter={() => handleSatelliteSearch()}
					/>
					<Button
						loading={loading}
						disabled={search?.toString().length !== 5}
						onClick={() => handleSatelliteSearch()}
					>
						Search
					</Button>
					{searchError && (
						<Alert
							message={searchError}
							type="error"
							closable
							afterClose={() => dispatch(resetSearchError())}
						/>
					)}
				</div>
				<div className="search-info">
					Latest satellites in orbit: <b>~46670</b>. Satellites de-orbited:{' '}
					<b>{'<'}10 000</b>.
				</div>
			</Input.Group>
			<Title level={3}>Examples</Title>
			<Space>
				{DEFAULT_SATELLITES.map((satellite) => (
					<Button
						type="default"
						key={satellite.name}
						onClick={() => handleSatelliteSearch(satellite.NORAD)}
					>
						{satellite.name}
					</Button>
				))}
			</Space>
