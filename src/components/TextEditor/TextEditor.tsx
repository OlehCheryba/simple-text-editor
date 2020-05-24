import React, { FC, useEffect, useRef } from "react";
import './TextEditor.sass';
import { useSelector } from "react-redux";
import TextStyleForm from '../TextStyleForm/TextStyleForm';
import { fontSizeSelector, colorSelector, backgroundColorSelector } from '../../store/text-editor/text.editor.selectors';

const TextEditor: FC = () => {
  const ContentEditableDiv = useRef(null);

  const fontSize = useSelector(fontSizeSelector);
  const color = useSelector(colorSelector);
  const backgroundColor = useSelector(backgroundColorSelector);

  useEffect(() => {
    if (fontSize) {
      document.execCommand('fontsize', false, fontSize); 
    }
  }, [fontSize]);

  useEffect(() => {
    if (color) {
      document.execCommand('forecolor', false, color); 
    }
  }, [color]);

  useEffect(() => {
    if (backgroundColor) {
      document.execCommand('backcolor', false, backgroundColor); 
    }
  }, [backgroundColor]);

  useEffect(() => {
    ContentEditableDiv.current?.focus();
  }, [fontSize, color, backgroundColor]);

  return (
    <div id="TextEditor">
      <h1>
        Text editor (Test task for Redentu)
      </h1>
      <TextStyleForm />
      <div 
        ref={ContentEditableDiv} 
        id="textBox" 
        contentEditable
        suppressContentEditableWarning
      >
        You can input text here :)
      </div>
    </div>
  );
};

export default TextEditor;