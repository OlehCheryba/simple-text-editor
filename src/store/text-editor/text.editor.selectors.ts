import { AppState } from "../store";

export const fontSizeSelector = ({ textEditor }: AppState) => textEditor.fontSize;
export const colorSelector = ({ textEditor }: AppState) => textEditor.color;
export const backgroundColorSelector = ({ textEditor }: AppState) => textEditor.backgroundColor;