import { combineReducers } from 'redux';
import satellitesReducer from '../features/satellitesSlice';
import notesReducer from '../features/notesSlice';

export const rootReducer = combineReducers({
	satellites: satellitesReducer,
	notes: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
