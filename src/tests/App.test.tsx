import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
// import { RootState } from '..';

test('renders App correctly with default props and Redux store', () => {
	const store = configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== 'development' ? false : true,
	});

	// const initialState: RootState = {
	// 	satellites: {
	// 		satellites: [],
	// 		satellite: null,
	// 		loading: false,
	// 		search: undefined,
	// 		searchError: null,
	// 	},
	// 	notes: {
	// 		notes: [],
	// 		content: '',
	// 	},
	// };

	render(
		<Provider store={store}>
			<App />
		</Provider>,
	);
	const searchButtonPlaceholder = screen.getByPlaceholderText(/NORAD/i);
	expect(searchButtonPlaceholder).toBeInTheDocument();
});
