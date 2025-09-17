import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import {
  SelectButton,
  SelectContainer,
  SelectedOptionIcon,
  SelectIcon,
  SelectList,
  SelectOption,
} from "./style";

type CustomSelectProps = {
  selectOptions: string[];
  updateOption: (opt: string) => void;
};

export const CustomSelect = ({
  selectOptions,
  updateOption,
}: PropsWithChildren<CustomSelectProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [o, setOption] = useState<string>(selectOptions[0]);

  const closeSelection = () => setIsOpen(false);
  const openSelection = () => setIsOpen(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const listRef = useRef<any>(null);

  const handleClickOutside = (e: Event) => {
    if (!listRef.current.contains(e.target)) {
      closeSelection();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const onOptionChange = (option: string) => {
    setOption(option);
    updateOption(option);
    closeSelection();
  };

  return (
    <SelectContainer ref={listRef}>
      {!isOpen ? (
        <SelectButton onClick={() => openSelection()}>
          {o}
          <SelectIcon />
        </SelectButton>
      ) : (
        <SelectList>
          {selectOptions.map((opt, i) => (
            <SelectOption onClick={() => onOptionChange(opt)} key={i}>
              {o === opt && <SelectedOptionIcon />}
              {opt}
            </SelectOption>
          ))}
        </SelectList>
      )}
    </SelectContainer>
  );
};
