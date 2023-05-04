import React from 'react';
import Form from 'react-bootstrap/Form';

export default function FilterBar(props){


  function createForm(name, type) {
    return(
      <Form.Check
                inline
                label= {name.charAt(0).toUpperCase() + name.slice(1)}
                type={type}
                name = {name}
                onClick={props.clickHandle} //clickHandle is passed through the props
              />

    )
  }
  return (
    <div className='filter-bar'>
      <div>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="my-1">
              {createForm("breakfast", type)}     {/*create for each cateogory of food */}
              {createForm("lunch", type)}
              {createForm("dinner",type)}
              {createForm("dessert",type)}
              {createForm("snack",type)}
            </div>
          ))}
        </Form>
      </div>
      <div>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="my-1">
              {createForm("red meat",type)}
              {createForm("poultry",type)}
              {createForm("seafood",type)}
              {createForm("vegetarian",type)}
              {createForm("vegan",type)}
            </div>
          ))}
        </Form>
      </div>
    </div>
  )
}
