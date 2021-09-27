import React from 'react';

const SearchBox = () => {
    return ( 
        <div className="input-group">
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" />
                
            </div>
            <button type="button" className="btn btn-primary">
                <i className="fas fa-search"></i>
            </button>
        </div>
     );
}
 
export default SearchBox;