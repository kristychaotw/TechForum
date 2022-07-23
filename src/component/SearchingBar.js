import React, { useRef } from "react";
import { SearchingBarWrapper } from "./style/component.css";

export default function SearchingBar({ setSearchWordInput }) {
  const searchRef = useRef();

  function handleSubmit() {
    setSearchWordInput(searchRef.current.value);
  }
  return (
    <SearchingBarWrapper>
      <input ref={searchRef} type="text" placeholder="Tag" />
      <input type="submit" value="Search" onClick={handleSubmit} />
    </SearchingBarWrapper>
  );
}
