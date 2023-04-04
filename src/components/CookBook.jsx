import React, { useState, useEffect } from 'react';
import { RecipeCards } from './RecipeCards';
import { FilterBar } from './CookbookFilter';

import Form from 'react-bootstrap/Form';
import { filter } from 'lodash';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";


// filter options: breakfast, lunch, dinner, dessert, snack, red meat, poultry, seafood, vegetarian, vegan


export default function CookBook(props) {

  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState([]);
  const [recipesToRender, setRecipesToRender] = useState([]);
  async function fetchEvents() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "recipes"));
    let cardList = []
    querySnapshot.docs.map((doc) => (cardList.push({
      id: doc.id,
      name: doc.data().name,
      filters: doc.data().filters
    })));
    setCards(cardList);
  }
  
  useEffect(() => {
    const filteredCards = cards.filter((card) => card.name.toLowerCase().startsWith(props.searchQuery.toLowerCase()));
    setRecipesToRender(filteredCards);
  }, [props.searchQuery, cards]);

  useEffect(() => {
    fetchEvents();
  }, []);

  function filterLogic() {
    let filteredCards = cards;
  
    if (filteredCards && filters.length !== 0) {
      filteredCards = filteredCards.filter((recipeObj) => {
        const recipesArrOfFilterTags = recipeObj.filters.split(/(?=[A-Z])/);
        for (const facet of recipesArrOfFilterTags) {
          if (filters.includes(facet.toLowerCase())) {
            return recipeObj;
          }
        }
      });
    }
    setRecipesToRender(filteredCards)
    console.log("recipe.."+recipesToRender)
  }

  useEffect(() => {
    filterLogic();
  }, [filters]);

  function handleCheckboxClick(evt) {
    const filterValue = evt.target.name.toLowerCase();
    if (filters.includes(filterValue)) {
      setFilters(filters.filter(filter => filter !== filterValue));
    } else {
      setFilters([...filters, filterValue]);
    }
  }



  // Modal + Form Handling
  const [modalShow, setModalShow] = useState(false);
  const [newRecipe, setNewRecipe] = useState({ name: '', headnote: '', ingredients: '', steps: '', filters: '', linkUrl: '' })
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  function handleNameEntry(evt) {
    newRecipe.name = evt.target.value.replace(/ /g, "-");
  }
  function handleHeadnoteEntry(evt) {
    newRecipe.headnote = evt.target.value;
  }
  function handleIngredientEntry(evt) {
    newRecipe.ingredients = evt.target.value;
  }
  function handleStepsEntry(evt) {
    newRecipe.steps = evt.target.value;
  }
  function handleAddingFilters(evt) {
    if (newRecipe.filters === '') {
      newRecipe.filters = evt.target.name;
    } else {
      newRecipe.filters = newRecipe.filters + evt.target.name;
    }
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const db = getFirestore();
    const eventsRef = collection(db, "recipes");
    try {
      await addDoc(eventsRef, newRecipe);
    } catch (error) {
      console.error('Error writing document: ', error);
    }
    fetchEvents();
    handleModalClose();
  }

  // resets empty newRecipe state after modal has been submitted
  if (newRecipe.name !== '') {
    setNewRecipe({ name: '', headnote: '', ingredients: '', steps: '', filters: '', linkUrl: '' });
  }

  return (
    <div>
      <FilterBar clickHandle={handleCheckboxClick} />

      <Button className="upload-btn my-2 my-sm-0 p-3" onClick={handleModalShow}>Add a recipe</Button>
      <Modal
        show={modalShow}
        onHide={handleModalClose}
        size='xl'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new page to your family's cookbook</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-4" controlId="formRecipeName">
              <Form.Label>What's the dish?</Form.Label>
              <Form.Control placeholder="Roasted Paprika-Coated Chicken with Honey-Glazed Potatoes..." onChange={handleNameEntry} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formHeadnote">
              <Form.Label>Where'd this recipe come from?</Form.Label>
              <Form.Control placeholder="Inspired by dad spilling too much paprika once and mom loving it..." onChange={handleHeadnoteEntry} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formIngredients">
              <Form.Label>List the ingredients</Form.Label>
              <Form.Control placeholder="Yukon Gold Potatoes; Fish Sauce..." onChange={handleIngredientEntry} />
              <Form.Text>For now, separate each of your items with a ;</Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formSteps">
              <Form.Label>List the steps</Form.Label>
              <Form.Control placeholder="First, play Zou bisou bisou by Gillian Hills; Next..." onChange={handleStepsEntry} />
              <Form.Text>For now, separate each of your steps with a ;</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pick its categories</Form.Label>
              <div className="mb-3 d-flex justify-content-between border border-black">
                {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Red Meat', 'Poultry', 'Seafood', 'Vegetarian', 'Vegan'].map((filterStr) => {
                  return <MakeFormCheck for={filterStr} handleFilters={handleAddingFilters} />
                })}
              </div>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} type='submit'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='container d-flex justify-content-around pt-5 mt-5'>
        {recipesToRender && recipesToRender.map((card) => (
          <RecipeCards key={card.id} recipeName={card.name} linkUrl="cook-book" filters={card.filters} />
        ))}
      </div>
    </div>
  );
}

function MakeFormCheck(props) {
  return (
    <Form.Check
      type="checkbox"
      id={props.for + 'Id'}
      label={props.for}
      name={props.for}
      onClick={props.handleFilters}
    />
  );
}