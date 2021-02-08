import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { ISatelliteData, ISatellitesState } from '../../interfaces';
import { AppDispatch, RootState } from '../..';

const initialState: ISatellitesState = {
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
		// Immutable state created by Immer
		// https://redux-toolkit.js.org/tutorials/intermediate-tutorial#mutable-update-logic
		// https://github.com/immerjs/immer

		changeSearchValue: (state, action) => {
			state.search = action.payload;
		},
		saveSearchError: (state, action: PayloadAction<string>) => {
			state.searchError = action.payload;
			state.loading = false;
			state.search = initialState.search;
		},
		clearSearchError: (state) => {
			state.searchError = initialState.searchError;
		},
		saveSatelliteToArray: (state, action: PayloadAction<ISatelliteData>) => {
			state.satellites = [...state.satellites, action.payload];
			state.loading = false;
			state.search = initialState.search;
		},
		saveSatellite: (state, action) => {
			state.satellite = action.payload;
			state.loading = false;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
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

export const getSatelliteByNo = (norad?: string) => (
	dispatch: AppDispatch,
	getState: () => RootState,
) => {
	const { search, satellites } = getState().satellites;
	dispatch(setLoading(true));

	// Uses cors-anywhere's API to bypass CORS issues
	// https://cors-anywhere.herokuapp.com/
	// Alternative
	//thingproxy.freeboard.io/fetch/
	// https://celestrak.com/NORAD/elements/gp.php?FORMAT=json&CATNR=41266
	https: axios
		.get(
			// `https://cors-anywhere.herokuapp.com/https://celestrak.com/NORAD/elements/gp.php?FORMAT=json&CATNR=${norad ? norad : search}`,
			`https://thingproxy.freeboard.io/fetch/https://celestrak.com/NORAD/elements/gp.php?FORMAT=json&CATNR=${
				norad ? norad : search
			}`,
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
	satellites.find((el: ISatelliteData) => {
		if (el.NORAD_CAT_ID === id) {
			dispatch(saveSatellite(el));
		}
	});
};

export const resetSearchError = () => (dispatch: AppDispatch) => {
	dispatch(clearSearchError());
};
