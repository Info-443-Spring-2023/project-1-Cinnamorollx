import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";


export default function RecipePages() {
  const recipeName = useParams().recipeName;
  const [data, setData] = useState({});
  async function fetchEvents() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "recipes"));
    const fetchedData = []

    querySnapshot.docs.map((doc) => (fetchedData.push({
      id: doc.id,
      name: doc.data().name,
      ingredients: doc.data().ingredients,
      steps: doc.data().steps,
      headnote: doc.data().headnote
    })));
    setData(fetchedData.filter(recipe => recipe.name === `${recipeName}`)[0]);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <main className='container recipe-page'>{console.log(data)}
      <div className='my-5 px-2 text-center'>
        <h1>{data.name}</h1>
        <p className='pt-4'>{data.headnote}</p>
      </div>

      <div>
        <h4 className='pb-2'>Ingredients</h4>
        <div>
          {data.ingredients && data.ingredients.split(";").map((ingredient, index) => (
            <p key={index}>{ingredient.trim()}</p>
          ))}
        </div>
      </div>

      <div className='mx-5 px-5 mt-5 recipe-steps text-left'>
        <h4 className='pb-2'>Steps</h4>
        <ol className='text-left'>
        <div>
          {data.ingredients && data.steps.split(";").map((step, index) => (
            <li key={index}>{step.trim()}</li>
          ))}
        </div>
        </ol>
      </div>
    </main>
  );
}

