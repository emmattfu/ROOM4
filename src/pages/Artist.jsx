import React from "react";
import { useSelector } from "react-redux";

import "../styles/artist.css";

const Artist = () => {
  const artist = useSelector((state) => state.artist);
  localStorage.setItem('artist', JSON.stringify(artist))

  if (!artist.image) {
    return <h1>Loading data...</h1>;
  }

  return (
    <div className="artist" onClick={() => console.log(artist.tags)}>
      <img src={artist.image[3]["#text"]} alt="artist__photo" />
      <h2>{artist.name}</h2>
      <p
        dangerouslySetInnerHTML={{ __html: artist.bio.content }}
        className="artist__bio"
      ></p>
      <div className="tags">
        {artist.tags.tag.map((tag, i) => {
          return (
            <div className="tag" key={`${i}${new Date()}`}>
              <a href={tag.url}>{tag.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artist;
