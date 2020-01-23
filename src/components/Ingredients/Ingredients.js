import React, {useState, useCallback} from 'react';
import IngredientsForm from './IngredientsForm';
import IngredientsList from './IngredientsList';
import IngredientsSearch from './IngredientsSearch';
import Box from '../UI/Box/Box';
import './Ingredients.scss'

const Ingredients =()=>{
    const [ingredients, setIngredients] = useState([]),
    [listLoading, setListLoading] = useState(true),
    dbUrl = 'https://hookspractise.firebaseio.com/ingredients.json',
    addIngHandler=(ing)=>{
        const newIngs = [...ingredients, ing];
        setIngredients(newIngs);
    },
    getList = useCallback(async(searchValue = null)=>{
        try{
            let query = '';
            if(searchValue !== ''){
                query = `?orderBy="name"&equalTo="${searchValue}"`;
            };
            const resp = await fetch(dbUrl+query),
            data = await resp.json();
            if(resp.status !== 200){
                throw new Error('Something went wrong in getting list from database');
            }
            let ingredients = [];
            if(data !== null){
                ingredients = Object.entries(data).map(([ingId, ingData])=>{
                    return {
                        id:ingId,
                        name:ingData.name,
                        amount:ingData.amount
                    }
                });
            }
            setIngredients(ingredients);
        }catch(err){
            console.log(err);
        }
    },[]);
    console.log(listLoading);
    return(
        <div className="ingredients">
            <IngredientsForm addIng={addIngHandler} dbUrl={dbUrl}/>
            <Box center>
                <IngredientsSearch setLoading={setListLoading} getList={getList}/>
                <IngredientsList loading={listLoading} items={ingredients}/>
            </Box>
        </div>
    )
}

export default Ingredients;