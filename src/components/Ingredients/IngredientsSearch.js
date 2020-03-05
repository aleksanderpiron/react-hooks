import React, {useState, useEffect, useRef} from 'react';
import Input from '../UI/Input/Input';

const IngredientsSearch=({getList, setLoading})=>{
    const [searchValue, setSearch] = useState(''),
    searchInput = useRef();
    useEffect(()=>{
        const searchTimer = setTimeout(()=>{
            if(searchValue !== searchInput.value){
                // setLoading(true);
                getList(searchValue);
            }
        }, 500)
        return ()=>{
            clearTimeout(searchTimer);
        }
    }, [searchValue, getList, setLoading]);
    return(
        <div className="ingredients__search">
            <Input
            referance={searchInput}
            value={searchValue}
            type="text"
            name="search"
            change={e=>{setSearch(e.target.value)}}/>
            <small>Full names only for now</small>
        </div>
    )
}

export default IngredientsSearch;