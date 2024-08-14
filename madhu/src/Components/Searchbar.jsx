import React,{useState} from "react";
const SearchBar = (props) => {

const [searchVal,setSearchVal] = useState("")

const handleChange=(e)=>{
    setSearchVal(e.target.value)
}



return(
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search for details"
            name="s" 
            onChange={handleChange}
        />
        
        <button type="button" onClick={()=>props.handleSearch(searchVal)}>Search</button>
    </form>
)
}

 export default SearchBar;
