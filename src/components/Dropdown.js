import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

function Dropdown({ options, value, onChange, useBorder }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);

    onChange(option);
  };

  let dropdownClassNames = "rounded-lg p-1 ";
  if (useBorder) {
    dropdownClassNames += "m-2 p-2 bg-sky-100";
  } else {
    dropdownClassNames += "mt-0.5 hover:bg-sky-100 rounded-lg cursor-pointer";
  }

  const renderedOptions = options.map((option) => {
    return (
      <div
        className={dropdownClassNames}
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
