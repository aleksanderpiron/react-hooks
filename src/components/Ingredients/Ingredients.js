import React, {useState, useEffect} from 'react';
import IngredientsForm from './IngredientsForm';
import IngredientsList from './IngredientsList';
import './Ingredients.scss'

const Ingredients =()=>{
    const [ingredients, setIngredients] = useState([]),
    dbUrl = 'https://hookspractise.firebaseio.com/ingredients.json',
    addIngHandler=(ing)=>{
        const newIngs = [...ingredients, ing];
        setIngredients(newIngs);
    },
    getList = async()=>{
        try{
            const resp = await fetch(dbUrl),
            data = await resp.json();
            if(resp.status !== 200){
                throw new Error('Something went wrong in getting list from database');
            }
            const ingredients = Object.entries(data).map(([ingId, ingData])=>{
                return {
                    id:ingId,
                    name:ingData.name,
                    amount:ingData.amount
                }
            });
            setIngredients(ingredients);
        }catch(err){
            console.log(err)
        }
    };
    useEffect(()=>{
        getList();
    }, [])
    return(
        <div className="ingredients">
            <IngredientsForm addIng={addIngHandler} dbUrl={dbUrl}/>
            <IngredientsList items={ingredients}/>
        </div>
    )
}

export default Ingredients;