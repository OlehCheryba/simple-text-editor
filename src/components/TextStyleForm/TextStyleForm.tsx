import React, { FC } from 'react';
import './TextStyleForm.sass';
import { useDispatch } from 'react-redux';
import { selectFontSize, selectColor, selectBackgroundColor } from "../../store/text-editor/text.editor.actions";

const TextStyleForm: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <select value="heading" onChange={(e) => dispatch(selectFontSize(e.target.value))}>
        <option value="heading">- font size -</option>
        <option value="1">Extra small</option>
        <option value="2">Small</option>
        <option value="3">Medium</option>
        <option value="4">Medium +</option>
        <option value="5">Big</option>
        <option value="6">Very big</option>
        <option value="7">Huge</option>
      </select>
      <select value="heading" onChange={(e) => dispatch(selectColor(e.target.value))}>
        <option value="heading">- text color -</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
      </select>
      <select value="heading" onChange={(e) => dispatch(selectBackgroundColor(e.target.value))}>
        <option value="heading">- background color -</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
      </select>
      <select
        onClick={() => dispatch(selectColor('hi'))}
      >
        <option value="das">dsadas</option>
      </select>
    </>
  );
};

export default TextStyleForm;