import React, { FC } from 'react';
import './TextStyleForm.sass';

interface TextStyleFormProps {
  onFontSizeChange: (fontSize: string) => void
  onColorChange: (color: string) => void
  onBackgroundColorChange: (backgroundColor: string) => void
}

const TextStyleForm: FC<TextStyleFormProps> = ({
  onFontSizeChange, onColorChange, onBackgroundColorChange
}) => (
  <form id="TextStyleForm">
    <select value="heading" onChange={(e) => onFontSizeChange(e.target.value)}>
      <option value="heading">Select font size</option>
      <option value="1">Extra small</option>
      <option value="2">Small</option>
      <option value="3">Medium</option>
      <option value="4">Medium +</option>
      <option value="5">Big</option>
      <option value="6">Very big</option>
      <option value="7">Huge</option>
    </select>
    <select value="heading" onChange={(e) => onColorChange(e.target.value)}>
      <option value="heading">Select text color</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="black">Black</option>
      <option value="white">White</option>
      <option value="orange">Orange</option>
      <option value="grey">Grey</option>
    </select>
    <select value="heading" onChange={(e) => onBackgroundColorChange(e.target.value)}>
      <option value="heading">Select background color</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="black">Black</option>
      <option value="white">White</option>
      <option value="orange">Orange</option>
      <option value="grey">Grey</option>
    </select>
  </form>
);

export default TextStyleForm;