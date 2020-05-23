export interface TextEditorState {
  fontSize: string | null, 
  color: string | null,
  backgroundColor: string | null
}

export const textEditorInitialState: TextEditorState = {
  fontSize: null, 
  color: null,
  backgroundColor: null
};