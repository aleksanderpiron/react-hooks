import React, {useState, useEffect, useRef} from 'react';

const IngredientsSearch=({getList, setLoading})=>{
    const [searchValue, setSearch] = useState(''),
    searchInput = useRef();
    useEffect(()=>{
        getList(searchValue);
        setLoading(false);
        console.log('turn down')
    }, [searchValue, getList, setLoading])
    return(
        <div className="ingredients__search">
            <input
            ref={searchInput}
            value={searchValue}
            type="text"
            name="search"
            onChange={e=>{setSearch(e.target.value)}}/>
            <small>Full names only for now</small>
        </div>
    )
}

export default IngredientsSearch;