import React from 'react';
import { Input, InputNumber, Button, Typography, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './searchBar.less';
import {
	handleChangeSearch,
	getSatelliteByNo,
	resetSearchError,
} from '../../features/satellitesSlice';
import { IState } from '../../interfaces';

const { Title } = Typography;

export const SearchBar: React.FC = () => {
	const dispatch = useDispatch();
	const { search, loading, searchError } = useSelector((state: IState) => state.satellites);

	const onChange = (value: string | number | undefined) => {
		dispatch(handleChangeSearch(value));
	};

	return (
		<div className="searchbar-container">
			<Title>Track satellites currently orbitting arround Earth using Celestrak's API.</Title>
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
						onChange={onChange}
						onPressEnter={() => dispatch(getSatelliteByNo())}
					/>
					<Button loading={loading} onClick={() => dispatch(getSatelliteByNo())}>
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
					<b>{'<='}10 000</b>.
				</div>
			</Input.Group>
		</div>
	);
};

export default SearchBar;
