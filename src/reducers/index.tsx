import { combineReducers } from 'redux';
import satellitesReducer from '../features/satellitesSlice';

export const rootReducer = combineReducers({
	satellites: satellitesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
