import React from "react";
import { useDispatch } from "react-redux";
import { getArtistInfo } from "../redux/actions";
import { NavLink } from "react-router-dom";

import "../styles/card.css";

const Card = ({ song }) => {
  const dispatch = useDispatch();

  const handleGetArtistInfo = (e) => {
    dispatch(getArtistInfo(song.artist.name));
  };

  return (
    <div className="card">
      <img className="card__img" src={song.image[3]["#text"]} alt="card__img" />
      <NavLink to={`/artist/${song.artist.name}`} style={{color: "black"}}>
         <p className="card__artist" onClick={handleGetArtistInfo}>{song.artist.name}</p>
      </NavLink>

      <p className="card__song">{song.name}</p>
      <a className="card__link" href={song.artist.url}>
        See more on Last.fm
      </a>
    </div>
  );
};

export default Card;
