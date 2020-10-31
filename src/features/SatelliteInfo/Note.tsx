import { CloseOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Input, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { INote } from '../../interfaces';
import { addNote } from '../notesSlice';
import './note.less';

const { Title } = Typography;
const { TextArea } = Input;

export const Note: React.FC<INote> = ({ id, content }: INote) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [newContent, setNewContent] = useState<string>('');

	const [editMode, setEditMode] = useState<boolean>(false);

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewContent(e.target.value);
	};
	const handleSaveNote = () => {
		dispatch(addNote(newContent));
		setEditMode(false);
	};

	const handleCancel = () => {
		setNewContent(content);
		setEditMode(false);
	};

	useEffect(() => {
		setNewContent(content);
	}, [content, history]);

	return (
		<div className="note-container">
			<Title level={4}>Note</Title>
			<div className="note">
				{content && !editMode && <p>{content}</p>}
				{editMode && (
					<TextArea
						allowClear
						autoSize
						maxLength={500}
						showCount
						defaultValue={content}
						value={newContent}
						placeholder="Insert note here :)."
						onChange={onChange}
						onPressEnter={() => handleSaveNote()}
					/>
				)}
				{!editMode && (
					<Button type="dashed" icon={<EditOutlined />} onClick={() => setEditMode(true)}>
						Edit note
					</Button>
				)}
				{editMode && (
					<Space>
						<Button
							type="default"
							icon={<CloseOutlined />}
							onClick={() => handleCancel()}
						>
							Cancel
						</Button>
						<Button
							type="primary"
							htmlType="submit"
							icon={<SaveOutlined />}
							onClick={() => handleSaveNote()}
						>
							Save note
						</Button>
					</Space>
				)}
			</div>
		</div>
	);
};
