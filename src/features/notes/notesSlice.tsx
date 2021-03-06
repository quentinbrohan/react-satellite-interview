import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INotesState, INote } from '../../interfaces';
import { AppDispatch, RootState } from '../..';

const initialState: INotesState = {
	notes: [],
	content: '',
};

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		changeNoteValue: (state, action: PayloadAction<string>) => {
			state.content = action.payload;
		},
		saveNoteToArray: (state, action: PayloadAction<INote>) => {
			state.notes = [
				...state.notes,
				{
					id: action.payload.id,
					content: action.payload.content,
				},
			];
		},
		editNote: (state, action: PayloadAction<INote>) => {
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
	const { satellite } = getState().satellites;

	// Check if satellite ID in state
	if (notes.length > 0) {
		if (notes.find((el: INote) => el.id === satellite!.NORAD_CAT_ID)) {
			dispatch(
				editNote({
					id: satellite!.NORAD_CAT_ID,
					content: value,
				}),
			);
		} else {
			dispatch(
				saveNoteToArray({
					id: satellite!.NORAD_CAT_ID,
					content: value,
				}),
			);
		}
	} else {
		dispatch(
			saveNoteToArray({
				id: satellite!.NORAD_CAT_ID,
				content: value,
			}),
		);
	}
};
