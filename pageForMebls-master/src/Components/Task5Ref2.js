import React from "react";
import { useRef, useState } from "react";
export function CustomTextInput() {


  const textInput = useRef(null); // int & textinput
  function focusTextInput() {
    // Установим фокус на текстовое поле с помощью чистого DOM API
    // Примечание: обращаемся к "current", чтобы получить DOM-узел
    textInput.current.focus();
  }


  // описываем, что мы хотим связать реф <input>
  // с `textInput` созданным в конструкторе
  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Фокус на текстовом поле" onClick={focusTextInput}
      />
    </div>
  );
}
