import React, { useRef } from "react";
import { SearchingBarWrapper } from "./style/component.css";
import { useDispatch } from "react-redux";

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
