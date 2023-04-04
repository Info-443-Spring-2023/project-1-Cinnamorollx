import React from 'react';
import Form from 'react-bootstrap/Form';

export function FilterBar(props){
  return (
    <div className='filter-bar'>
      <div>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="my-1">
              <Form.Check
                inline
                label="Breakfast"
                type={type}
                id={`inline-${type}-bre`}
                name='breakfast'
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Lunch"
                type={type}
                name='lunch'
                id={`inline-${type}-lun`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Dinner"
                type={type}
                name='dinner'
                id={`inline-${type}-din`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Dessert"
                name='dessert'
                type={type}
                id={`inline-${type}-des`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Snack"
                name='snack'
                type={type}
                id={`inline-${type}-sna`}
                onClick={props.clickHandle}
              />
            </div>
          ))}
        </Form>
      </div>
      <div>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="my-1">
              <Form.Check
                inline
                label="Red Meat"
                name='red meat'
                type={type}
                id={`inline-${type}-red`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Poultry"
                name='poultry'
                type={type}
                id={`inline-${type}-pou`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Seafood"
                name='seafood'
                type={type}
                id={`inline-${type}-sea`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Vegetarian"
                name='vegetarian'
                type={type}
                id={`inline-${type}-veget`}
                onClick={props.clickHandle}
              />
              <Form.Check
                inline
                label="Vegan"
                name='vegan'
                type={type}
                id={`inline-${type}-vegan`}
                onClick={props.clickHandle}
              />
            </div>
          ))}
        </Form>
      </div>
    </div>
  )
}
