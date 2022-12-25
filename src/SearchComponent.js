import { useState } from "react";
import data from "./data.json";

const searchTeamData=(searchText)=>{
   //return [data[0]];
   return data.filter((team)=>
   team.name.toLowerCase().includes(searchText.toLowerCase())
   );
};

const SearchComponent =({setFilteredData})=>{
    // const searchText = "sowmya"; 
    // is equal to 
    // const [searchText] = useState("sowmya");

    // // Type 1const searchText = ""; 
    // // is equal to 
    // const [searchText] = useState();
    // //or
    // //const [searchText] = useState("");

    const [searchText,setSearchText] = useState();

    return(
    <div className="search">
            <form 
            onSubmit={
                (e)=>{
                    e.preventDefault();
                    const filteredData = searchTeamData(searchText);
                    setFilteredData(filteredData);
                }
            }>
                <input id="searchBox" placeholder="search" 
                       value={searchText}
                       onChange={
                        //Type 1
                        //(e)=>{searchText=e.target.value;}
                        (e)=>{setSearchText(e.target.value);}
                       }></input>
                <button>Search</button>
            </form>
    </div>
    );
};

export default SearchComponent;