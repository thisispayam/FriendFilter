import React from 'react';

const SearchBox =({searchfield, searchChange})=>{
	return (
    <div>
		    <input className="pa2 ba b--yellow bg-lightest-yellow" type='search' placeholder="Search for robots..." onChange={searchChange} />
    </div>
		)
}

export default SearchBox;
