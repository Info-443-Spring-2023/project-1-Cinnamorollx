import React from "react";
import { Link } from 'react-router-dom';


export function RecipeCards({ id, recipeName }) {

    return (
        <div className="recipe-card card col-sm-7 col-md-5 col-lg-4 py-4">
          <Link to={`/home/cook-book/${recipeName}`} className='recipe-link'>
            <p className="card-title text-center mx-auto my-auto">{recipeName.replace("-"," ")}</p>
          </Link>
        </div>
    );
}