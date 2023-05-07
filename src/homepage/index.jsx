import { useState } from "react";
import AnimeItem from "../anime-item";
import Search from "../components/search";
import "./style.css";

const Homepage = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [animes, setAnimes] = useState([]);

  const getDataFromSearchComponent = async (searchData) => {
    setLoadingState(true);

    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchData}`
      );

      const { data } = await response.json();

      if (data && data.length > 0) {
        setAnimes(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingState(false);
    }
  };

  console.log(loadingState, animes);

  return (
    <div className="homepage">
      <div className="web-top">
        <h1>Anime Search Engine</h1>
      </div>

      <Search getDataFromSearchComponent={getDataFromSearchComponent} />

      {loadingState && <div>Loading.... please wait</div>}

      {animes && animes.length > 0 ? (
        animes.map((anime) => (
          <AnimeItem
            key={anime.mal_id}
            id={anime.mal_id}
            image={anime.images.jpg.image_url}
            title={anime.title}
            airingStatus={anime.status}
            rank={anime.rank}
            rating={anime.rating}
            url={anime.url}
            title2={anime.title_japanese}
          />
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default Homepage;
