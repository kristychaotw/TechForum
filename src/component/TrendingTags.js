import React, { useEffect } from "react";
import { Button, TrendingWrapper } from "./style/component.css";
import { useSelector } from "react-redux";

export default function TrendingTags({ currentTag, setCurrentTag }) {
  const tags = useSelector((state) => state.tags);

  useEffect(() => {
    setCurrentTag(new Object(tags.tags[0]).name);
  }, [tags]);

  function handleClick(e) {
    setCurrentTag(e);
  }

  return (
    <TrendingWrapper>
      <h2>Trending</h2>
      {tags.loading && <div>Loading...</div>}
      {!tags.loading && tags.error ? <div>Error:{tags.error}</div> : null}
      {!tags.loading &&
        tags.tags.length &&
        tags.tags.map((tag) => {
          return (
            <Button
              name={tag.name}
              value={tag.name}
              bgc={tag.name === currentTag ? "lightblue" : "#fff"}
              color={tag.name === currentTag ? "#000" : "#636363"}
              onClick={(e) => handleClick(e.target.value)}
            >
              {tag.name}
            </Button>
          );
        })}
    </TrendingWrapper>
  );
}
