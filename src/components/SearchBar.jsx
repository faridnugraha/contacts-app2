import React from "react";
import { PropTypes } from "prop-types";

function SearchBar({keyword, keywordChange}){
    return(
        <input
            className="search-bar"
            type="text"
            placeholder="Cari berdasarkan nama"
            value={keyword}
            onChange={(ev) => keywordChange(ev.target.value)}
        />
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChage: PropTypes.func.isRequired
}

export default SearchBar