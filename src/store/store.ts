import { createStore, combineReducers } from 'redux';
import textEditorReducer from './text-editor/text.editor.reducer';
import { TextEditorState } from './text-editor/text.editor.state';

const rootReducer = combineReducers({
  textEditor: textEditorReducer
});

export const store = createStore(rootReducer);

export type AppState = {
  textEditor: TextEditorState
};