import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { INotesState } from '../../../interfaces';
import notes, {
	changeNoteValue,
	saveNoteToArray,
	addNote,
	editNote,
} from '../../../features/notes/notesSlice';

const initialState: INotesState = {
	notes: [],
	content: '',
};

const mockNote = {
	id: 10000,
	content: 'Shablagoo!',
};

describe('createSlice', () => {
	describe('when notesSlice.content is undefined', () => {
		it('should throw an error', () => {
			expect(() => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				createSlice({
					reducers: {
						changeNoteValue: (state, action) => (state.content = action.payload),
					},
					initialState,
				});
			}).toThrowError();
		});
	});
});

describe('notes reducer', () => {
	it('should handle initial state', () => {
		expect(notes(undefined, {})).toEqual(initialState);
	});

	it('should handle changeNoteValue', () => {
		expect(
			notes(initialState, {
				type: changeNoteValue.type,
				payload: 'This is a test.',
			}),
		).toEqual({
			notes: [],
			content: 'This is a test.',
		});
	});

	it('should handle saveNoteToArray', () => {
		expect(
			notes(initialState, {
				type: saveNoteToArray.type,
				payload: mockNote,
			}),
		).toEqual({
			notes: [mockNote],
			content: '',
		});
	});

	it('should handle editNote', () => {
		expect(
			notes(initialState, {
				type: saveNoteToArray.type,
				payload: mockNote,
			}),
		).toEqual({
			notes: [mockNote],
			content: '',
		});
	});
});

describe('notes actions', () => {
	it('should create an action to load a satellite', () => {
		const expectedAction = {
			type: saveNoteToArray.type,
			payload: mockNote,
		};
		expect(saveNoteToArray(mockNote)).toEqual(expectedAction);
	});
});
