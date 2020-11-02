import React, { useState } from 'react';
import { Typography, Switch } from 'antd';
import { UnorderedListOutlined, BorderlessTableOutlined } from '@ant-design/icons';

import { ISatelliteData } from '../../../interfaces';
import './tableData.less';

const { Title } = Typography;

const TableData: React.FC<ISatelliteData> = ({
	// OBJECT_NAME,
	OBJECT_ID,
	EPOCH,
	MEAN_MOTION,
	ECCENTRICITY,
	INCLINATION,
	RA_OF_ASC_NODE,
	ARG_OF_PERICENTER,
	MEAN_ANOMALY,
	EPHEMERIS_TYPE,
	CLASSIFICATION_TYPE,
	NORAD_CAT_ID,
	ELEMENT_SET_NO,
	REV_AT_EPOCH,
	BSTAR,
	MEAN_MOTION_DOT,
	MEAN_MOTION_DDOT,
}: ISatelliteData) => {
	const [checked, setChecked] = useState<boolean>(false);
	const handleChangeSwitch = (checked: boolean) => {
		setChecked(checked);
	};
	return (
		<div className="info-container">
			{/* <Title level={4}>Data</Title> */}
			<Switch
				checkedChildren={<BorderlessTableOutlined />}
				unCheckedChildren={<UnorderedListOutlined />}
				checked={checked}
				onChange={handleChangeSwitch}
				className="table-switch"
			/>
			{/* Table/List */}
			{!checked && (
				<div className="ant-table-wrapper">
					<div className="ant-table">
						<div className="ant-table-content">
							<table className="table-layout: auto;">
								<tbody className="ant-table-tbody">
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Object ID</td>
										<td className="ant-table-cell description">{OBJECT_ID}</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Epoch</td>
										<td className="ant-table-cell description">{EPOCH}</td>
									</tr>

									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Mean motion</td>
										<td className="ant-table-cell description">
											{MEAN_MOTION}{' '}
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Eccentricity</td>
										<td className="ant-table-cell description">
											{ECCENTRICITY}{' '}
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Inclination</td>
										<td className="ant-table-cell description">
											{INCLINATION}{' '}
											<span className="ant-table-cell unit">degrees</span>
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">
											Right Ascension of the Ascending Node
										</td>
										<td className="ant-table-cell description">
											{RA_OF_ASC_NODE}{' '}
											<span className="ant-table-cell unit">degrees</span>
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">
											Argument of Perigee
										</td>
										<td className="ant-table-cell description">
											{ARG_OF_PERICENTER}{' '}
											<span className="ant-table-cell unit">degrees</span>
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Mean Anomaly</td>
										<td className="ant-table-cell description">
											{MEAN_ANOMALY}{' '}
											<span className="ant-table-cell unit">degrees</span>
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Ephemeris type</td>
										<td className="ant-table-cell description">
											{EPHEMERIS_TYPE}{' '}
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Classification</td>
										<td className="ant-table-cell description">
											{CLASSIFICATION_TYPE}{' '}
											<span className="ant-table-cell unit">
												{CLASSIFICATION_TYPE === 'U' && 'unclassified'}
												{CLASSIFICATION_TYPE === 'C' && 'classified'}
												{CLASSIFICATION_TYPE === 'S' && 'secret'}
											</span>
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Satellite number</td>
										<td className="ant-table-cell description">
											{NORAD_CAT_ID}{' '}
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">Element number</td>
										<td className="ant-table-cell description">
											{ELEMENT_SET_NO}{' '}
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">
											Revolution number at epoch
										</td>
										<td className="ant-table-cell description">
											{REV_AT_EPOCH}{' '}
											<span className="ant-table-cell unit">revs</span>
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">BSTAR drag term</td>
										<td className="ant-table-cell description">{BSTAR} </td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">
											First Time Derivative of the Mean Motion
										</td>
										<td className="ant-table-cell description">
											{MEAN_MOTION_DOT}{' '}
											<span className="ant-table-cell unit">
												revs per day
											</span>
										</td>
									</tr>
									<tr className="ant-table-row ant-table-row-level-0">
										<td className="ant-table-cell title">
											Second Time Derivative of Mean Motion
										</td>
										<td className="ant-table-cell description">
											{MEAN_MOTION_DDOT}{' '}
											<span className="ant-table-cell unit">
												revs per day
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			)}
			{/* List */}
			{checked && (
				<div className="table-data">
					<ul>
						<li>
							<span className="title">Object ID</span>
							<strong className="description">{OBJECT_ID}</strong>
						</li>
						<li>
							<span className="title">Epoch</span>
							<strong className="description">{EPOCH}</strong>
						</li>
						<li>
							<span className="title">Mean motion</span>
							<strong className="description">{MEAN_MOTION}</strong>
						</li>
						<li>
							<span className="title">Eccentricity</span>
							<strong className="description">{ECCENTRICITY}</strong>
						</li>
						<li>
							<span className="title">Inclination</span>
							<strong className="description">{INCLINATION}</strong>
							<span className="unit"> degrees</span>
						</li>
						<li>
							<span className="title"> Right Ascension of the Ascending Node</span>
							<strong className="description">{RA_OF_ASC_NODE}</strong>
							<span className="unit"> degrees</span>
						</li>
						<li>
							<span className="title">Argument of Perigee</span>
							<strong className="description">{ARG_OF_PERICENTER}</strong>
							<span className="unit"> degrees</span>
						</li>
						<li>
							<span className="title">Mean Anomaly</span>
							<strong className="description">{MEAN_ANOMALY}</strong>
							<span className="unit"> degrees</span>
						</li>

						<li>
							<span className="title">Ephemeris type</span>
							<strong className="description">{EPHEMERIS_TYPE}</strong>
						</li>

						<li>
							<span className="title">Classification</span>
							<strong className="description">{CLASSIFICATION_TYPE}</strong>
							<span className="unit">
								{' '}
								{CLASSIFICATION_TYPE === 'U' && 'unclassified'}
								{CLASSIFICATION_TYPE === 'C' && 'classified'}
								{CLASSIFICATION_TYPE === 'S' && 'secret'}
							</span>
						</li>
						<li>
							<span className="title">Satellite number</span>
							<strong className="description">{NORAD_CAT_ID}</strong>
						</li>

						<li>
							<span className="title">Element number</span>
							<strong className="description">{ELEMENT_SET_NO}</strong>
						</li>

						<li>
							<span className="title">Revolution number at epoch</span>
							<strong className="description">{REV_AT_EPOCH}</strong>
							<span className="unit"> revs</span>
						</li>

						<li>
							<span className="title">BSTAR drag term</span>
							<strong className="description">{BSTAR}</strong>
						</li>

						<li>
							<span className="title"> First Time Derivative of the Mean Motion</span>
							<strong className="description">{MEAN_MOTION_DOT}</strong>
							<span className="unit"> revs per day</span>
						</li>

						<li>
							<span className="title"> Second Time Derivative of Mean Motion</span>
							<strong className="description">{MEAN_MOTION_DDOT}</strong>
							<span className="unit"> revs per day</span>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default TableData;
