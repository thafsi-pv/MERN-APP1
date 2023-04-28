const SearchList = ({id,img, title,originaltitle,vote_average}) => {
  return (
    <div key={id} className="search-item">
      <div>
        <img src={img} alt="poster" />
      </div>
      <p>{originaltitle}</p>
      {vote_average!=null && <div className="enddiv">
        <p className={vote_average>7.5?'best-rating':'poor-rating'} >{vote_average}/10</p>
      </div>}
    </div>
  );
};

export default SearchList;
