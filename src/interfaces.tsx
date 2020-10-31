// import { Action } from '@reduxjs/toolkit';

export interface IAppLayout {
	children: React.ReactNode;
}

export interface IRouteParams {
	id: string;
}

export interface ISatelliteInfo {
	satellite: ISatelliteData;
}

export interface ISatelliteData {
	OBJECT_NAME: string;
	OBJECT_ID: string;
	EPOCH: string;
	MEAN_MOTION: number;
	ECCENTRICITY: number;
	INCLINATION: number;
	RA_OF_ASC_NODE: number;
	ARG_OF_PERICENTER: number;
	MEAN_ANOMALY: number;
	EPHEMERIS_TYPE: number;
	CLASSIFICATION_TYPE: string;
	NORAD_CAT_ID: number;
	ELEMENT_SET_NO: number;
	REV_AT_EPOCH: number;
	BSTAR: number;
	MEAN_MOTION_DOT: number;
	MEAN_MOTION_DDOT: number;
}

export interface ISatellitesState {
	satellites: [] | ISatelliteData[];
	satellite: null | ISatelliteData;
	loading: boolean;
	search: undefined | number;
	searchError: null | string;
}

export interface IState {
	satellites: ISatellitesState;
	notes: INotesState;
}

export interface INotesState {
	notes: [] | INote[];
	content: string;
}
export interface INote {
	id: number;
	content: string;
}
