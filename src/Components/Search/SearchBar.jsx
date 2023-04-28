import { useEffect, useState } from "react";
import SearchList from "./SearchList";
import {MdClear} from "react-icons/md"

const SearchBar = ({ data, handleSearchBar,searchTxt,handleClearBtn,placeholder }) => {
  return (
    <div className="local-search">
      <div className="input-div">
        <input
          type="text"
          name=""
          placeholder={placeholder}
          id=""
          value={searchTxt}
          onChange={handleSearchBar}
        />
        {searchTxt && <MdClear className="clear-btn" onClick={handleClearBtn}/>}
      </div>
      <div className="search-reco">
        {data?.map((item) => {
          return (
            <SearchList
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.Name}
              originaltitle={item.Name}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
