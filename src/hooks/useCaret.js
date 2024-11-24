import { useState, useEffect } from "react";

export function useCaret(inputRef) {
  const [caretPosition, setCaretPosition] = useState(0);

  const updateCaretPosition = () => {
    if (inputRef.current) {
      const input = inputRef.current;
      const caretPos = input.selectionStart || 0;

      
      const tempSpan = document.createElement("span");
      tempSpan.style.font = getComputedStyle(input).font;
      tempSpan.style.whiteSpace = "pre";
      tempSpan.style.visibility = "hidden";
      tempSpan.textContent = input.value.slice(0, caretPos);
      document.body.appendChild(tempSpan);

      const spanRect = tempSpan.getBoundingClientRect();
      const caretLeft = spanRect.width - input.scrollLeft;

      document.body.removeChild(tempSpan);
      setCaretPosition(caretLeft);
    }
  };

  const handleClick = (e) => {
    if (inputRef.current) {
      inputRef.current.focus();
      updateCaretPosition();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return { caretPosition, updateCaretPosition };
}