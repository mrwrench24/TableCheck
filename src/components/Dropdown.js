import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);

    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="mt-0.5 hover:bg-sky-100 border-black-100 rounded-lg cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoArrowRight />
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
