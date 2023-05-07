import "./style.css";

const AnimeItem = (props) => {
  const { image, title, tit2, airingstatus, rank, rating, url } = props;
  console.log(props, 'anime-item-props');
  
  return (
    <div className="anime">
      <img className="image" src={image} alt={title} />
      <ul className="description">
        <li>{title}</li>
        <li>{tit2}</li>
        <li>rank: {rank}</li>
        <li>rating: {rating}</li>
        <li>status: {airingstatus}</li>
        <li>url: <a href={url}>myanimelist/{title}</a></li>
      </ul>
    </div>
  );
};

export default AnimeItem;
