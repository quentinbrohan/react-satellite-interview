import React from 'react';
import { Input, InputNumber, Button, Typography } from 'antd';

import './searchBar.less';

const { Title } = Typography;

export const SearchBar: React.FC = () => {
	const onChange = (value: string | number | undefined) => {
		console.log('changed', value);
	};

	return (
		<div className="searchbar-container">
			<Title>Track satellites currently orbitting arround Earth using Celestrak's API.</Title>
			<Input.Group style={{ margin: '0 auto 2rem' }}>
				<p>
					Enter Satellite Catalog Number (5 digit number) to add its informations to your
					list.
				</p>
				<InputNumber min={10000} max={46670} onChange={onChange} type="number" />
				<Button>Search</Button>
				<div className="search-info">
					Latest satellites in orbit: <b>~46670</b>. Satellites de-orbited:{' '}
					<b>{'<'}10 000</b>.
				</div>
			</Input.Group>
		</div>
	);
};

export default SearchBar;
