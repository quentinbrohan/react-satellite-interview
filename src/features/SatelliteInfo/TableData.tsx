import { Typography } from 'antd';
import React from 'react';

import { ISatelliteData } from '../../interfaces';
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
	return (
		<div className="info-container">
			<Title level={4}>Data</Title>
			<div className="ant-table-wrapper">
				<div className="ant-table">
					<div className="ant-table-content">
						<table className="table-layout: auto;">
							<tbody className="ant-table-tbody">
								{/* <tr className="ant-table-row ant-table-row-level-0">
									<td className="ant-table-cell title">Object name</td>
									<td className="ant-table-cell description">{OBJECT_NAME} </td>
								</tr> */}
								<tr className="ant-table-row ant-table-row-level-0">
									<td className="ant-table-cell title">Object ID</td>
									<td className="ant-table-cell description">{OBJECT_ID} </td>
								</tr>
								<tr className="ant-table-row ant-table-row-level-0">
									<td className="ant-table-cell title">Epoch</td>
									<td className="ant-table-cell description">{EPOCH} </td>
								</tr>

								<tr className="ant-table-row ant-table-row-level-0">
									<td className="ant-table-cell title">Mean motion</td>
									<td className="ant-table-cell description">{MEAN_MOTION} </td>
								</tr>
								<tr className="ant-table-row ant-table-row-level-0">
									<td className="ant-table-cell title">Eccentricity</td>
									<td className="ant-table-cell description">{ECCENTRICITY} </td>
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
									<td className="ant-table-cell title">Argument of Perigee</td>
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
									<td className="ant-table-cell description">{NORAD_CAT_ID} </td>
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
										<span className="ant-table-cell unit">revs per day</span>
									</td>
								</tr>
								<tr className="ant-table-row ant-table-row-level-0">
									<td className="ant-table-cell title">
										Second Time Derivative of Mean Motion
									</td>
									<td className="ant-table-cell description">
										{MEAN_MOTION_DDOT}{' '}
										<span className="ant-table-cell unit">revs per day</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableData;
