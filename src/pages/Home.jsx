import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { getTopSongs } from "../redux/actions";

import "../styles/home.css";

const Home = () => {
  const dispatch = useDispatch();
  const topSongs = useSelector((state) => state.topSongs);

  useEffect(() => {
    dispatch(getTopSongs());
  }, [dispatch]);

  if (!topSongs.length) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="home">
      <h1 className="home__title">Top 50 songs</h1>
      <div className="home__wrapper">
        {topSongs.map((song, i) => (
          <Card key={`${i}${new Date()}`} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Home;
