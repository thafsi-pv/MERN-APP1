const SearchList = ({id,img, title}) => {
  return (
    <div key={id} className="search-item">
      <div>
        <img src={img} alt="poster" />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default SearchList;
