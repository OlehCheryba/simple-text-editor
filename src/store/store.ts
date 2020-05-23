import { createStore } from 'redux';
import textEditorReducer from './text-editor/text.editor.reducer';

export const store = createStore(textEditorReducer);