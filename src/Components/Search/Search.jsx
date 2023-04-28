import "./Search.css";
import { searchdata } from "../../mocks/searchdata";
import { useEffect, useState } from "react";
import axios from "axios";
import { IMG_URL, TMDB_SEARCH_API } from "../../constants";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

const Search = () => {
  const [imdbdata, setImdbData] = useState([{}]);
  console.log("🚀 ~ file: Search.jsx:11 ~ Search ~ imdbdata:", imdbdata)

  useEffect(() => {
    getImdbData("malayalam");
  }, []);

  const getImdbData = async (txt) => {
    const data = await axios.get(
      `${TMDB_SEARCH_API}${txt}&page=1&include_adult=false`
    );
    setImdbData(data?.data?.results);
  };

  const handleTmdbSearch = (event) => {
    let txt = event.target.value;
    getImdbData(txt);
  };

  return (
    <div className="scontainer">
      <div className="serch-container">
        <SearchBar data={searchdata} />
        <div className="api-search">
          <input
            type="text"
            name=""
            placeholder="Search movie (tmdb api)"
            id=""
            onChange={handleTmdbSearch}
          />
          <div className="search-reco">
            {imdbdata?.map((item) => {
              return (
                <SearchList
                  id={item.id}
                  img={IMG_URL + item?.poster_path}
                  title={item.title}
                  originaltitle={item.original_title}
                  vote_average={item.vote_average}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
