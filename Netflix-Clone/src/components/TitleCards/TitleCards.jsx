import React, { useRef, useEffect, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data"
import { Link } from "react-router-dom"

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGZlMjViMzNhNjMyNDk2ODg4OTgyMTQxMWQxZGEzNyIsIm5iZiI6MTcyNDA4NDUwNy41MDc1ODEsInN1YiI6IjY2OGJlZDI3MmI1ZGU3MjM2MGVhZWQwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qJaWQxL5Qq0GgCCvOArxa243Zm4E7r2-WQlcUXwTCPQ",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
          options
        );
        const data = await response.json();
        setApiData(data.results);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData();

    const currentRef = cardRef.current;
    currentRef.addEventListener("wheel", handleWheel);

    return () => {
      currentRef.removeEventListener("wheel", handleWheel); // Cleanup
    };
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) =>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
              alt={card.original_title || "Movie poster"}
            />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  );
};

export default TitleCards;

