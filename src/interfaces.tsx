import { Action } from '@reduxjs/toolkit';

export interface IAppLayout {
	children: React.ReactNode;
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

export interface IRouteParams {
	id: string;
}

export interface ISatellitesInitialState {
	satellites: [] | ISatelliteData[];
	satellite: null;
	loading: boolean;
	search: undefined;
	searchError: null;
}

export interface ISatellitesState {
	satellites: ISatelliteData[];
	satellite: ISatelliteData;
	loading: boolean;
	search: number | undefined;
	searchError: string;
}

export interface IState {
	satellites: ISatellitesState;
	notes: INotesState;
}

export interface INotesInitialState {
	notes: [] | INote[];
	content: string;
}

export interface INotesState {
	notes: [] | INote[];
	content: string;
}
export interface INote {
	id: number;
	content: string;
}

// TODO: Type Actions
