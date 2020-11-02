import { createSlice } from '@reduxjs/toolkit';
import { ISatellitesState } from '../../../interfaces';
import satellites, {
	changeSearchValue,
	setLoading,
	saveSatelliteToArray,
	saveSatellite,
} from '../../../features/satellites/satellitesSlice';
import mockSatellite from '../../../data/mockSatellite.json';

export const initialState: ISatellitesState = {
	satellites: [],
	satellite: null,
	loading: false,
	search: undefined,
	searchError: null,
};

const state: ISatellitesState = {
	satellites: [mockSatellite],
	satellite: null,
	loading: false,
	search: undefined,
	searchError: null,
};

describe('createSlice', () => {
	describe('when satellitesSlice.search is undefined', () => {
		it('should throw an error', () => {
			expect(() => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				createSlice({
					reducers: {
						changeSearchValue: (state, action) => (state.search = action.payload),
					},
					initialState,
				});
			}).toThrowError();
		});
	});
});

describe('satellites reducer', () => {
	it('should handle initial state', () => {
		expect(satellites(undefined, {})).toEqual(initialState);
	});

	it('should handle changeSearchValue', () => {
		expect(
			satellites(initialState, {
				type: changeSearchValue.type,
				payload: 2,
			}),
		).toEqual({
			satellites: [],
			satellite: null,
			loading: false,
			search: 2,
			searchError: null,
		});
	});

	it('should handle setLoading', () => {
		expect(
			satellites(initialState, {
				type: setLoading.type,
				payload: true,
			}),
		).toEqual({
			satellites: [],
			satellite: null,
			loading: true,
			search: undefined,
			searchError: null,
		});
	});

	it('should handle saveSatelliteToArray', () => {
		expect(
			satellites(initialState, {
				type: saveSatelliteToArray.type,
				payload: mockSatellite,
			}),
		).toEqual({
			satellites: [mockSatellite],
			satellite: null,
			loading: false,
			search: undefined,
			searchError: null,
		});
	});

	// it('should dispatch saveSearchError if saveSatelliteToArray ID already in state', () => {
	// 	expect(
	// 		satellites(state, {
	// 			type: saveSatelliteToArray.type,
	// 			payload: mockSatellite,
	// 		}),
	// 	).toEqual({
	// 		satellites: [mockSatellite],
	// 		satellite: null,
	// 		loading: false,
	// 		search: undefined,
	// 		searchError: `NORAD ${mockSatellite.NORAD_CAT_ID} already added !`,
	// 	});
	// });

	it('should handle saveSatellite', () => {
		expect(
			satellites(initialState, {
				type: saveSatellite.type,
				payload: mockSatellite,
			}),
		).toEqual({
			satellites: [],
			satellite: mockSatellite,
			loading: false,
			search: undefined,
			searchError: null,
		});
	});
});

describe('satellites actions', () => {
	it('should create an action to load a satellite', () => {
		const expectedAction = {
			type: saveSatellite.type,
			payload: mockSatellite,
		};
		expect(saveSatellite(mockSatellite)).toEqual(expectedAction);
	});
});
