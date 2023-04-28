import { useEffect, useState } from "react";
import SearchList from "./SearchList";

const SearchBar = ({ data }) => {
  const [dataList, setDataList] = useState(data);
  console.log("🚀 ~ file: SearchBar.jsx:5 ~ SearchBar ~ dataList:", dataList)
  const [filterData, setFilterData] = useState(data);
  console.log("🚀 ~ file: SearchBar.jsx:7 ~ SearchBar ~ filterData:", filterData)

  useEffect(() => {
    //setDataList(data);
    //setFilterData(data);
  }, []);

  const handleSearchBar = (event) => {
    var filterlist=dataList;
    let txt = event.target.value;
    let filterdData = filterlist.filter((item) =>
      item.Name.toLowerCase().includes(txt.toLowerCase())
    );
    setFilterData(filterdData);
  };

  return (
    <div className="local-search">
      <input
        type="text"
        name=""
        placeholder="Search from local data"
        id=""
        onChange={handleSearchBar}
      />
      <div className="search-reco">
        {filterData?.map((item) => {
          return (
            // <div key={item.id} className="search-item">
            //   <div>
            //     <img src={item.img} alt="" />
            //   </div>
            //   <p>{item.Name}</p>
            // </div>
            <SearchList key={item.id} id={item.id} img={item.img} title={item.Name} />
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
