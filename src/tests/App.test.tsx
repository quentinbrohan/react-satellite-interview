import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import { ISatellitesInitialState } from '../interfaces';

test('renders the connected app with initialState', () => {
	const store = configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== 'development' ? false : true,
	});
	const initialState: ISatellitesInitialState = {
		satellites: [],
		satellite: null,
		loading: false,
		search: undefined,
		searchError: null,
	};
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		initialState,
	);
	const searchButtonPlaceholder = screen.getByPlaceholderText(/NORAD/i);
	expect(searchButtonPlaceholder).toBeInTheDocument();
});
