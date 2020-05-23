import React, { FC, useEffect } from "react";
import './TextEditor.sass';
import { useSelector, useDispatch } from "react-redux";
import { selectFontSize, selectColor, selectBackgroundColor } from "../../store/text-editor/text.editor.actions";
import { fontSizeSelector, colorSelector, backgroundColorSelector } from '../../store/text-editor/text.editor.selectors';

interface TextEditorProps {
}

const TextEditor: FC<TextEditorProps> = () => {
  const dispatch = useDispatch();

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
    document.getElementById("textBox")?.focus();
  }, [fontSize, color, backgroundColor]);

  return (
    <div>
      <div contentEditable="true">
        <span style={{ backgroundColor: 'rgb(248, 187, 208)' }}>Hi</span>
        <br/>
        <span style={{ backgroundColor: 'rgb(248, 187, 208)' }}>My lovely</span>
        <span style={{ color: 'rgb(136, 14, 79)', fontSize: 54 }}>little</span>
        <span style={{ color: 'rgb(186, 104, 200)', backgroundColor: 'rgb(248, 187, 0)' }}>Ponny</span>
      </div>
    </div>
  );
};

export default TextEditor;