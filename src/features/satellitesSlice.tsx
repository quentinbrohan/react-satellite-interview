import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { ISatelliteData, ISatellitesInitialState } from '../interfaces';
import { AppDispatch, RootState } from '..';

const initialState: ISatellitesInitialState = {
	satellites: [],
	satellite: null,
	loading: false,
	search: undefined,
	searchError: null,
};

const satellitesSlice = createSlice({
	name: 'satellites',
	initialState: initialState,
	reducers: {
		changeSearchValue: (state, action) => {
			state.search = action.payload;
		},
		saveSearchError: (state, action) => {
			state.searchError = action.payload;
			state.loading = false;
			state.search = initialState.search;
		},
		clearSearchError: (state) => {
			state.searchError = initialState.searchError;
		},
		saveSatelliteToArray: (state, action) => {
			state.satellites = [...state.satellites, action.payload];
			state.loading = false;
			state.search = initialState.search;
		},
		saveSatellite: (state, action) => {
			state.satellite = action.payload;
			state.loading = false;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export default satellitesSlice.reducer;

// Actions

export const {
	changeSearchValue,
	saveSearchError,
	clearSearchError,
	saveSatelliteToArray,
	saveSatellite,
	setLoading,
} = satellitesSlice.actions;

export const handleChangeSearch = (value: string | number | undefined) => (
	dispatch: AppDispatch,
) => {
	dispatch(changeSearchValue(value));
};

export const getSatelliteByNo = () => (dispatch: AppDispatch, getState: () => RootState) => {
	const { search, satellites } = getState().satellites;
	dispatch(setLoading(true));

	// Uses cors-anywhere's API to bypass CORS
	axios
		.get(
			`https://cors-anywhere.herokuapp.com/https://celestrak.com/NORAD/elements/gp.php?FORMAT=json&CATNR=${search}`,
		)
		.then((response) => {
			if (response.data === 'No GP data found') {
				dispatch(saveSearchError(response.data));
			} else if (satellites.length > 0) {
				// Check if satellite ID already in state
				const isFound = satellites.some((el: ISatelliteData) => {
					if (el.NORAD_CAT_ID === response.data[0].NORAD_CAT_ID) {
						return true;
					} else {
						return false;
					}
				});
				if (isFound) {
					dispatch(
						saveSearchError(`NORAD ${response.data[0].NORAD_CAT_ID} already added !`),
					);
				} else {
					dispatch(saveSatelliteToArray(response.data[0]));
				}
			} else if (satellites.length === 0) {
				dispatch(saveSatelliteToArray(response.data[0]));
			}
		})
		.catch((error) => {
			console.log(error);
			dispatch(saveSearchError(error.data));
		});
};

export const loadSatellite = (id: number) => (dispatch: AppDispatch, getState: () => RootState) => {
	const { satellites } = getState().satellites;

	// Check if satellite ID in state
	satellites.filter((el: ISatelliteData) => {
		const isFound = el.NORAD_CAT_ID === id;
		if (isFound) {
			dispatch(saveSatellite(el));
		}
	});
};

export const resetSearchError = () => (dispatch: AppDispatch) => {
	dispatch(clearSearchError());
};
