import { createSlice } from '@reduxjs/toolkit';

import { INotesInitialState, INote } from '../interfaces';
import { AppDispatch, RootState } from '..';

const initialState: INotesInitialState = {
	notes: [],
	content: '',
};

const notesSlice = createSlice({
	name: 'notes',
	initialState: initialState,
	reducers: {
		changeNoteValue: (state, action) => {
			state.content = action.payload;
		},
		saveNoteToArray: (state, action) => {
			state.notes = [
				...state.notes,
				{
					id: action.payload.id,
					content: action.payload.content,
				},
			];
			console.log(state.notes);
		},
		editNote: (state, action) => {
			const id = state.notes.findIndex((note) => note.id === action.payload.id);
			if (id !== -1) state.notes[id].content = action.payload.content;
		},
	},
});

export default notesSlice.reducer;

// Actions
export const { changeNoteValue, saveNoteToArray, editNote } = notesSlice.actions;

export const handleChangeContent = (value: string) => (dispatch: AppDispatch) => {
	dispatch(changeNoteValue(value));
};

export const addNote = (value: string) => (dispatch: AppDispatch, getState: () => RootState) => {
	const { notes } = getState().notes;
	const { satellite }: any = getState().satellites;

	// Check if satellite ID in state
	if (notes.length > 0) {
		if (notes.find((el: INote) => el.id === satellite.NORAD_CAT_ID)) {
			dispatch(
				editNote({
					id: satellite.NORAD_CAT_ID,
					content: value,
				}),
			);
		} else {
			dispatch(
				saveNoteToArray({
					id: satellite.NORAD_CAT_ID,
					content: value,
				}),
			);
		}
	} else {
		dispatch(
			saveNoteToArray({
				id: satellite.NORAD_CAT_ID,
				content: value,
			}),
		);
	}
};
