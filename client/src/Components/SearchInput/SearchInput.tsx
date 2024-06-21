import { useEffect, useState } from "react";
import "./SearchInput.css";

interface SearchInputProps {
  onSearch: (value: string) => void;
  defaultValue: string | null;
}

function SearchInput({ onSearch, defaultValue }: SearchInputProps) {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (defaultValue) onSearch(value);
  }, [defaultValue, value, onSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, onSearch]);
  return (
    <div className="SearchInput">
      <input
        type="text"
        value={value}
        placeholder="Search for products..."
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchInput;
