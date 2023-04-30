import "./Search.css";
import { searchdata } from "../../mocks/searchdata";
import { useEffect, useState } from "react";
import axios from "axios";
import { IMG_URL, TMDB_SEARCH_API } from "../../Constants/constants";
import SearchBar from "./SearchBar";

const Search = () => {
  const [localSearchTxt, setLocalSearchTxt] = useState("");
  const [tmdbSearchTxt, setTmdbSearchTxt] = useState("");

  const [dataList] = useState(searchdata);
  const [filterData, setFilterData] = useState(searchdata);
  const [imdbdata, setImdbData] = useState([{}]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("useEffect run....")
      getImdbData(tmdbSearchTxt);
    }, 300);
    return () => {
      console.log("retun exicuted");
      clearTimeout(timeout);
    };
    //getImdbData("malayalam");
  }, [tmdbSearchTxt]);

  const getImdbData = async (txt) => {
    const data = await axios(TMDB_SEARCH_API, { params: { query: txt } });
    if (data?.data?.results.length != 0) {
      const results = data?.data?.results;
      const updatedResult = results.map((obj) => {
        const { poster_path, original_title, ...rest } = obj;
        return { img: IMG_URL + poster_path, Name: original_title, ...rest };
      });
      setImdbData(updatedResult);
    } 
    else {
      getImdbData("malayalam");
    }
  };

  const handleTmdbSearch = (event) => {
    let txt = event.target.value;
    setTmdbSearchTxt(event.target.value);
    //getImdbData(txt);
  };

  // ------------------------------------------

  const handleSearchBar = (event) => {
    var filterlist = dataList;
    let txt = event.target.value;
    setLocalSearchTxt(event.target.value);
    let filterdData = filterlist.filter((item) =>
      item.Name.toLowerCase().includes(txt.toLowerCase())
    );
    setFilterData(filterdData);
  };

  const handleLocalClearBtn = () => {
    setLocalSearchTxt("");
    setFilterData(dataList);
  };
  const handleTmdbClearBtn = () => {
    setTmdbSearchTxt("");
    getImdbData("malayalam");
  };

  return (
    <div className="scontainer">
      <div className="serch-container">
        <SearchBar
          data={filterData}
          handleSearchBar={handleSearchBar}
          searchTxt={localSearchTxt}
          handleClearBtn={handleLocalClearBtn}
          placeholder={"Search local data"}
        />
        <SearchBar
          data={imdbdata}
          handleSearchBar={handleTmdbSearch}
          searchTxt={tmdbSearchTxt}
          handleClearBtn={handleTmdbClearBtn}
          placeholder={"Search tmdb api data"}
        />
      </div>
    </div>
  );
};

export default Search;
