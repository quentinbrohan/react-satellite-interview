import { combineReducers } from 'redux';
import satellitesReducer from '../features/satellites/satellitesSlice';
import notesReducer from '../features/notes/notesSlice';

export const rootReducer = combineReducers({
	satellites: satellitesReducer,
	notes: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
