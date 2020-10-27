import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';

test('renders learn react link', () => {
	const store = configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== 'development' ? false : true,
	});
	render(
		<Provider store={store}>
			<App />
		</Provider>,
	);
	const linkElement = screen.getByText(/search/i);
	expect(linkElement).toBeInTheDocument();
});
