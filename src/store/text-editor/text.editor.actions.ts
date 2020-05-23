import { SELECT_FONT_SIZE, SELECT_COLOR, SELECT_BACKGROUND_COLOR } from "./text.editor.action.types";

interface SelectFontSizeAction {
  type: typeof SELECT_FONT_SIZE
  payload: {
    fontSize: string
  }
}
export const selectFontSize = (fontSize: string): SelectFontSizeAction => ({
  type: SELECT_FONT_SIZE,
  payload: { fontSize }
});

interface SelectColorAction {
  type: typeof SELECT_COLOR
  payload: {
    color: string
  }
}
export const selectColor = (color: string): SelectColorAction => ({
  type: SELECT_COLOR,
  payload: { color }
});

interface SelectBackgroundColorAction {
  type: typeof SELECT_BACKGROUND_COLOR
  payload: {
    backgroundColor: string
  }
}
export const selectBackgroundColor = (backgroundColor: string): SelectBackgroundColorAction => ({
  type: SELECT_BACKGROUND_COLOR,
  payload: { backgroundColor }
});

export type TextEditorActions = SelectFontSizeAction | SelectColorAction | SelectBackgroundColorAction