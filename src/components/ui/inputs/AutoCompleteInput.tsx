import React, { useState, useEffect, useRef } from "react";
import BasicInput from "./BasicInput";

export type AutocompleteSuggestion = {
  id: string | number;
  label: string;
};

type AutocompleteProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
  suggestions: AutocompleteSuggestion[];
  isLoading?: boolean;
  value: AutocompleteSuggestion | null;
  onSelect: (item: AutocompleteSuggestion) => void;
};

export default function AutoCompleteInput ({
  label,
  placeholder,
  required,
  suggestions,
  isLoading,
  value,
  onSelect,
}: AutocompleteProps) {
  const [inputValue, setInputValue] = useState(value?.label || "");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        handleSelect(suggestions[highlightedIndex]);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  const handleSelect = (item: AutocompleteSuggestion) => {
    onSelect(item);
    setInputValue(item.label);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <BasicInput
        label={label}
        required={required}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
        leftIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
          </svg>
        }
        rightIcon={
          isLoading ? (
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 15 5 5 5-5"></path>
              <path d="m7 9 5-5 5 5"></path>
            </svg>
          )
        }
      />

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 rounded-md border border-gray-200 bg-white shadow-md">
          <div className="max-h-60 overflow-auto p-1">
            {suggestions.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center px-2 py-1.5 text-sm rounded-sm relative cursor-pointer select-none ${
                  index === highlightedIndex ? "bg-gray-100" : ""
                } ${value?.id === item.id ? "font-medium" : ""} hover:bg-gray-100`}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {value?.id === item.id && (
                  <svg
                    className="mr-2 h-4 w-4 opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
