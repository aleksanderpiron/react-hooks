import React, {useState, useEffect, useRef} from 'react';

const IngredientsSearch=({getList, setLoading})=>{
    const [searchValue, setSearch] = useState(''),
    searchInput = useRef();
    useEffect(()=>{
        const searchTimer = setTimeout(()=>{
            if(searchValue !== searchInput.value){
                setLoading(true);
                getList(searchValue);
            }
        }, 500)
        return ()=>{
            clearTimeout(searchTimer);
        }
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