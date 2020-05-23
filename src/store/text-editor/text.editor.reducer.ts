import { textEditorInitialState, TextEditorState } from "./text.editor.state";
import { SELECT_FONT_SIZE, SELECT_COLOR, SELECT_BACKGROUND_COLOR } from "./text.editor.action.types";
import { TextEditorActions } from "./text.editor.actions";
import { Reducer } from "redux";

const textEditorReducer: Reducer<TextEditorState, TextEditorActions> = (state = textEditorInitialState, action) => {
  switch (action.type) {
    case SELECT_FONT_SIZE:
      return {
        ...state,
        fontSize: action.payload.fontSize
      };
    case SELECT_COLOR:
      return {
        ...state,
        color: action.payload.color
      };
    case SELECT_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.payload.backgroundColor
      };
    default:
      return state;
  };
};

export default textEditorReducer;