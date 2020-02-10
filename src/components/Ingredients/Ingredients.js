import React, {useState, useCallback, useReducer} from 'react';
import IngredientsForm from './IngredientsForm';
import IngredientsList from './IngredientsList';
import IngredientsSearch from './IngredientsSearch';
import Box from '../UI/Box/Box';
import './Ingredients.scss';

const ingredientReducer = (currentState, action) => {
    switch (action.type){
        case 'SET':
            return action.ing;
        case 'ADD':
            return [...currentState, action.ing];
        case 'DELETE':
            return [...currentState].filter(ing=>{
                return ing.id !== action.ing.id;
            })
        default:
            return 0;
    }
}

const Ingredients=({pushNotif})=>{
    const [ingredients, dispatch] = useReducer(ingredientReducer, []),
    [loading, setLoading] = useState(true),
    dbUrl = 'https://hookspractise.firebaseio.com/ingredients.json',
    removeIngHandler=async(ingId=null)=>{
        if(ingId !== null){
            const resp = await fetch(`https://hookspractise.firebaseio.com/ingredients/${ingId}.json`,{
                method:'DELETE'
            });
            if(resp.status === 200){
                getListHandler();
            }
        }
    },
    getListHandler = useCallback(async(searchValue = null)=>{
        try{
            setLoading(true);
            let query = '';
            if(searchValue !== '' && searchValue !== null){
                query = `?orderBy="name"&equalTo="${searchValue}"`;
            };
            const resp = await fetch(dbUrl+query),
            data = await resp.json();
            if(resp.status !== 200){
                throw new Error();
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
            setLoading(false);
            dispatch({type:'SET', ing:ingredients});
        }catch(err){
            console.log(err);
            pushNotif('Something went wrong with getting ingredients from database! Try again later.', 'error');
        }
    },[pushNotif]);
    return(
        <div className="ingredients">
            <IngredientsForm getList={getListHandler} dbUrl={dbUrl}/>
            <Box center>
                <IngredientsSearch setLoading={setLoading} getList={getListHandler}/>
                <IngredientsList removeIng={removeIngHandler} loading={loading} items={ingredients}/>
            </Box>
        </div>
    )
}

export default Ingredients;