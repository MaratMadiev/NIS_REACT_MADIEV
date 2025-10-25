import { RefObject } from "react";

interface SearchInputProps {
  searchRef: RefObject<HTMLInputElement | null>;
  forceUpdate: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ searchRef, forceUpdate }) => {
  return (
    <input
      type="text"
      ref={searchRef}
      onChange={forceUpdate}
      placeholder="Поиск по названию..."
      className="search-input"
    />
  );
};